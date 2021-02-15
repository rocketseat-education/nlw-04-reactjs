import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"

export function useChallenges() {
  const context = useContext(ChallengesContext)

  return context
}