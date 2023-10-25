import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
import express from "express"
import { defineString } from "firebase-functions/params"
import { handleSpecialCommands } from "./specialCommands"
import { publishToTopic } from "../common/pubsub"
import { onRequest } from "firebase-functions/v2/https"
import { checkMessageId } from "../common/utils"
import { Request, Response } from "express"

const runtimeEnvironment = defineString("ENVIRONMENT")

const webhookPath = process.env.WEBHOOK_PATH

if (!admin.apps.length) {
  admin.initializeApp()
}
const app = express()

const getHandler = async (req: Request, res: Response) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
   **/
  const verifyToken = process.env.VERIFY_TOKEN
  // Parse params from the webhook verification request
  const mode = req.query["hub.mode"]
  const token = req.query["hub.verify_token"]
  const challenge = req.query["hub.challenge"]

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verifyToken) {
      // Respond with 200 OK and challenge token from the request
      functions.logger.log("WEBHOOK_VERIFIED")
      res.status(200).send(challenge)
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403)
    }
  } else {
    res.sendStatus(400)
  }
}

const postHandler = async (req: Request, res: Response) => {
  if (req.body.object) {
    if (req?.body?.entry?.[0]?.changes?.[0]?.value) {
      let value = req.body.entry[0].changes[0].value
      let phoneNumberId = value.metadata.phone_number_id
      let wabaID = req.body.entry[0].id
      let checkerPhoneNumberId
      let userPhoneNumberId
      let checkerWabaId
      let userWabaId

      checkerPhoneNumberId = process.env.WHATSAPP_CHECKERS_BOT_PHONE_NUMBER_ID
      userPhoneNumberId = process.env.WHATSAPP_USER_BOT_PHONE_NUMBER_ID
      checkerWabaId = process.env.WHATSAPP_CHECKERS_WABA_ID
      userWabaId = process.env.WHATSAPP_USERS_WABA_ID

      if (
        (phoneNumberId === checkerPhoneNumberId && wabaID === checkerWabaId) ||
        (phoneNumberId === userPhoneNumberId && wabaID === userWabaId)
      ) {
        if (value?.messages?.[0]) {
          let message = value.messages[0]
          let type = message.type
          if (
            type == "text" &&
            message.text.body.startsWith("/") &&
            runtimeEnvironment.value() !== "PROD"
          ) {
            //handle db commands
            await handleSpecialCommands(message)
          } else {
            if (message?.id) {
              //if message has been processed before, don't even put it in queue.
              if (await checkMessageId(message.id)) {
                functions.logger.warn(`message ${message.id} already processed`)
                res.sendStatus(200)
                return
              }
            } else {
              functions.logger.error(`message ${message.id} has no id`)
              res.sendStatus(200)
              return
            }
            if (
              (type == "button" || type == "interactive" || type == "text") &&
              phoneNumberId === checkerPhoneNumberId
            ) {
              //put into checker queue
              await publishToTopic("checkerEvents", message)
            }
            if (phoneNumberId === userPhoneNumberId) {
              //put into user queue
              await publishToTopic("userEvents", message)
            }
          }
          res.sendStatus(200)
        } else if (value?.statuses?.[0]) {
          let status = value.statuses[0]
          let bot = phoneNumberId === checkerPhoneNumberId ? "checker" : "user"
          if (status.status === "failed") {
            const errorObj = {
              messageId: status.id,
              timestamp: status.timestamp,
              recipientId: status.recipient_id,
              errors: status.errors,
              displayPhoneNumber: value.metadata.displayPhoneNumber,
              bot: bot,
            }
            functions.logger.error(
              `Error sending message ${status.id} to ${status.recipient_id} from ${bot} bot`,
              errorObj
            )
          }
          res.sendStatus(200)
        } else {
          functions.logger.log(`Not a message or status update`)
          res.sendStatus(200)
        }
      } else {
        functions.logger.warn(
          `Unexpected message source from phoneNumberId ${phoneNumberId}`
        )
        res.sendStatus(200)
      }
    } else {
      res.sendStatus(200) //unexpected message type, could be status update
    }
  } else {
    // Return a '404 Not Found' if event is not from a WhatsApp API
    functions.logger.warn("issue with req.body.obj")
    functions.logger.log(JSON.stringify(req.body, null, 2))
    res.sendStatus(404)
  }
}

// Accepts POST requests at /webhook endpoint
// Note: TODO: Will delete after webhook is pointed to new endpoint and everything is stable
app.post("/whatsapp", postHandler)
app.get("/whatsapp", getHandler)

// Accepts POST requests at /{webhookPath} endpoint
app.post(`/${webhookPath}`, postHandler)
app.get(`/${webhookPath}`, getHandler)

app.post("/telegram", async (req, res) => {
  const db = admin.firestore()
  console.log(JSON.stringify(req.body))
  res.sendStatus(200)
})

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests

const webhookHandlerV2 = onRequest(
  {
    secrets: [
      "WHATSAPP_USER_BOT_PHONE_NUMBER_ID",
      "WHATSAPP_CHECKERS_BOT_PHONE_NUMBER_ID",
      "VERIFY_TOKEN",
      "WHATSAPP_CHECKERS_WABA_ID",
      "WHATSAPP_USERS_WABA_ID",
    ],
  },
  app
)

export { app, webhookHandlerV2 }
