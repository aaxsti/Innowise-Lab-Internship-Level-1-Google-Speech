import { GameStatistics } from '../../interfaces/game-statistics';
import { StatisticsActionsType, StatisticsActionTypes } from './statistics.action-types';

export const requestStatistics = (): StatisticsActionsType => ({
  type: StatisticsActionTypes.REQUEST_STATISTICS,
});

export const fetchStatistics = (payload: Array<GameStatistics>): StatisticsActionsType => ({
  type: StatisticsActionTypes.FETCH_STATISTICS,
  payload,
});

export const sendStatistics = (gameStats: GameStatistics): StatisticsActionsType => ({
  type: StatisticsActionTypes.SEND_STATISTICS,
  payload: gameStats,
});

export default sendStatistics;
