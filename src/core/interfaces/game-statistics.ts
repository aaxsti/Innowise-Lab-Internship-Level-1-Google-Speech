import { MyTimestamp } from '../firebase/firebase';

export interface GameStatistics {
  login: string | undefined
  level: number
  correct: number
  incorrect: number
  total?: number
  date: Date | MyTimestamp | string
}
