exports.USER_BOT_RESPONSES = {
  1.5: "⛔⛔ Thank you for waiting! Our CheckMates have reviewed the message and think it's *likely to be untrue*.❌\n\nPlease do not spread it further⛔️\n\nThank you for keeping Singapore informed!",
  3.5: "🚧🚧 Thank you for waiting! Our CheckMates have reviewed the message and think that *while some elements within could be true, it's presented in a misleading way*.⚠️\n\nPlease take it with a pinch of salt and think twice before spreading it further🚧.\n\nThank you for keeping Singapore informed!",
  5: "✅✅ Thank you for waiting! Our CheckMates have reviewed the message and think that it's *accurate*.✅\n\nThank you for keeping Singapore informed!",
  IRRELEVANT: "Thanks for waiting! Our CheckMates have reviewed the message and think it's *harmless*.👌 Still, such messages add workload for our CheckMates, so we'd appreciate if you avoid sending in trivial messages in the future!",
  IRRELEVANT_AUTO: "Thanks for waiting! This message is likely *harmless*.👌 Still, such messages add workload for our CheckMates, so we'd appreciate if you avoid sending in trivial messages in the future!",
  NO_SCORE: "Hello! 👋 Thanks for sending this in! Our *CheckMates🕵🏻 will review this* and *provide the results soon*.",
  MESSAGE_NOT_YET_ASSESSED: "Hello! 👋 Thanks for sending this in! Our *CheckMates🕵🏻 will review this* and *provide the results soon*.",
  SCAM: "⛔️⛔️ Thanks for waiting! Our CheckMates have reviewed the message and think this is likely a *scam*!🚫\n\nWe recommend you do not engage further⛔️",
  SUSPICIOUS: "⛔️⛔️ Thanks for waiting! Our CheckMates have reviewed the message and think this *looks suspicious*!🚨\n\nWe recommend you do not engage further⛔️",
  SPAM: "🚧🚧 Thanks for waiting! Our CheckMates have reviewed this message and think this is likely spam! It's likely harmless, but you should always make sure!\n\nThank you for keeping Singapore safe!",
  LEGITIMATE: "✅✅Thanks for waiting! Our CheckMates have reviewed the message and think that it's *from a legtimate source*.✅\n\nThank you for keeping Singapore safe!",
  UNSURE: "🤷🏻‍♂️🤷🏻‍♀️Thanks for waiting! Unfortunately, our CheckMates are *unsure about this message*.😞 Sorry about that, we're human too! If you haven't already done so, you could send in the message with more context, e.g. sending in a screenshot containing the sender's number instead.\n\nThank you for keeping Singapore safe!",
  UNSUPPORTED_TYPE: "Sorry, CheckMate currently doesn't support this type of message.",
  SCAMSHIELD_PREAMBLE: "The above represents the collective opinion of our CheckMates. That said, ScamShield (https://scamshield.org.sg) is still the authoritative, official source for scams in Singapore. CheckMate is partnering with ScamShield to better fight scams in Singapore.",
  SCAMSHIELD_SEEK_CONSENT: "Would you like us to share this message with ScamShield? Only the contents of this message, and no other information, will be sent.",
  SCAMSHIELD_ON_CONSENT: "Thank you for sharing this message with us and ScamShield, and for keeping Singapore safe!",
  SCAMSHIELD_ON_DECLINE: `No worries! We will not be sending your message to ScamShield. If you change your mind, you can still hit "Yes" above. Thank you for sharing this message with us, and for keeping Singapore safe!`,
  DEMO_SCAM_MESSAGE: "Imagine this is a scam message that you receive in another WhatsApp chat. *Forward this message in to CheckMate (this chat)*⤴️",
  DEMO_SCAM_PROMPT: "If you receive a scam message like this simulated one one above, just forward or copy and send it to this number. Go ahead and try it to see how CheckMate works!",
  DEMO_END: "See how it works now? When you see a message that you're unsure of 🤔, just forward it in and we'll help you check it ✅✅. It works for images/photos too!\n\n*A few tips/rules*\n1) Send in only one message at a time! If you've got a series of messages, instead of forwarding them in all (which triggers us multiple times), please send in a screenshot of them instead\n2) Only send in messages that you're unsure of, because our CheckMates have to review these messages 🙏.\n\nNow that you know how it works, would you like to add CheckMate to your contact list for easy finding in the future?",
  ONBOARDING_END: "And that's it! If you want to learn more, you can visit https://checkmate.sg. If you have any feedback, do submit it at https://bit.ly/checkmate-feedback. Now, you can start sending in other messages. Let's go do our part in the fight against scams and misinformation! 💪",
  NEW_USER: "Hello and welcome to CheckMate! We're glad you're here 😊. Would you like to go through a quick onboarding to see how CheckMate works? Otherwise, you can go ahead and send in dubious messages right now!",
  GET_STARTED: "No worries! You can get started immediately by sending in dubious messages you're unsure about. To learn more, you can visit https://checkmate.sg. Please only send in messages that you're unsure of, because our CheckMates will have to review these messages 🙏. Thank you!"
};

exports.FACTCHECKER_BOT_RESPONSES = {
  VOTE_NO: "No problem! If you wish to come back and assess the message, you may do so by clicking the 'yes' button. See you soon!😊",
  FACTCHECK_PROMPT: "Please assess the veracity of the claim(s) in this message on a scale from 0 to 5, where 0 means the claim(s) are entirely false, and 5 means the claim(s) are entirely true.",
  L1_ASSESSMENT_PROMPT: "Which of these categories best describes this message?",
  L2_OTHERS_ASSESSEMENT_PROMPT: "Which of these subcategories best describes this message?",
  RESPONSE_RECORDED: "Got it! Your response has been recorded. Thank you for playing your part in the fight against scams and misinformation, one message at a time! 💪",
  HOLD_FOR_NEXT_POLL: "Got it👍! Please hold for another poll to vote on how true the message is.",
  HOLD_FOR_L2_CATEGORISATION: "Got it👍! Please hold for another selection.",
  ONBOARDING_1: "Welcome to our community of CheckMates! 👋🏻 We're grateful to have you on board to combat misinformation and scams. 🙇‍♀️🙇🏻 We'd love to get to know you better - could you *reply to this message* and share your name with us? (Reply to this message by swiping right)!",
  ONBOARDING_2: "Thank you and welcome, {{name}}! We're thrilled to have you on board as we work together to combat misinformation and scams.😊 By using the CheckMate bot, you are accepting our privacy policy which can be found here: https://bit.ly/checkmate-privacy",
  ONBOARDING_3: `To ensure you're equipped with the necessary skills to identify misinformation and scams, let's start with a quick quiz. 📝 Simply follow the link (https://bit.ly/checkmates-quiz) to take the quiz. Once you've completed it, come back to this chat and click on "I've done the quiz!" to notify me. Let's get started! 🤖`,
  ONBOARDING_4: `Awesome! Now that you know how to identify misinformation and scams, you are ready to help us combat them! 🙌🏻 If you haven't already, do join this WhatsApp group (https://bit.ly/checkmates-groupchat) that brings together all the other CheckMates and the core product team for updates and feedback. If you're looking for resources, you can visit our wiki page (https://bit.ly/checkmates-wiki). Thanks again for joining our community of CheckMates. Enjoy! 👋🏻🤖`,
  NOT_A_REPLY: "Sorry, did you forget to reply to a message? You need to swipe right on the message to reply to it.",
};

exports.thresholds = {
  endVote: 0.5,
  endVoteSus: 0.2,
  endVoteUnsure: 0.8,
  startVote: 1,
  isSpam: 0.5,
  isLegitimate: 0.5,
  isInfo: 0.5,
  isIrrelevant: 0.5,
  isUnsure: 0.5,
  isSus: 0.5,
};
