import { GameStatistics } from '../../interfaces/game-statistics';

export enum StatisticsActionTypes {
  SEND_STATISTICS = 'app.statistics/SEND_STATISTICS',
  REQUEST_STATISTICS = 'app.statistics/REQUEST_STATISTICS',
  FETCH_STATISTICS = 'app.statistics/FETCH_STATISTICS',
}

export interface sendStatisticsActionType {
  type: StatisticsActionTypes.SEND_STATISTICS;
  payload: GameStatistics
}

export interface requestStatisticsActionType {
  type: StatisticsActionTypes.REQUEST_STATISTICS;
}

export interface fetchStatisticsActionType {
  type: StatisticsActionTypes.FETCH_STATISTICS;
  payload: Array<GameStatistics>
}

export type StatisticsActionsType = sendStatisticsActionType
  | requestStatisticsActionType
  | fetchStatisticsActionType
