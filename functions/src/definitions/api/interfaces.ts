interface createVoteRequest {
  factCheckerId?: string
  factCheckerName?: string
}

interface updateVoteRequest {
  category: string
  truthScore?: number //between 1 and 5
}

interface createChecker {
  name: string
  type: "human" | "ai"
  isActive?: boolean
  isOnboardingComplete?: boolean
  singpassOpenId: string | null
  telegramId: string | null
  whatsappId?: string | null
  level?: number
  experience?: number
  numVoted?: number
  numCorrectVotes?: number
  numVerifiedLinks?: number
  preferredPlatform?: string | null
  lastVotedTimestamp?: null
}

interface Checker {
  name: string
  type: "human" | "ai"
  isActive: boolean | null
  pendingVoteCount: number
  last30days: last30DaysStats
  achievements: Achievements | null
  level: number
  experience: number
}

interface VoteSummary {
  category: string | null
  truthScore: number | null
  type: "image" | "text"
  createdTimestamp: Date
  votedTimestamp: Date
  text: string | null //only for type text
  caption: string | null //only for type image
  needsReview: boolean //if the vote differs from the majority
  isAssessed: boolean //if the message is assessed
  firestorePath: string
}

interface Vote {
  type: "image" | "text"
  text: string | null //only for type text
  caption: string | null //only for type image
  signedImageUrl: string | null //only for type image
  category: string | null
  truthScore: number | null
  isAssessed: boolean //if the message is assessed
  finalStats: AssessedInfo | null
}

interface last30DaysStats {
  totalVoted: number
  accuracyRate: number
  averageResponseTime: number
  peopleHelped: number
}

interface Achievements {
  //TODO: add more achievements in future
}

interface AssessedInfo {
  responseCount: number
  scamCount: number
  illicitCount: number
  infoCount: number
  satireCount: number
  spamCount: number
  irrelevantCount: number
  legitimateCount: number
  unsureCount: number
  truthScore: number
  primaryCategory: string
  rationalisation: string | null
}

export {
  createVoteRequest,
  updateVoteRequest,
  createChecker,
  Checker,
  VoteSummary,
  Vote,
}
