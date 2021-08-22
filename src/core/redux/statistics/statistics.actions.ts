import { GameStatistics } from '../../interfaces/game-statistics';
import { StatisticsActionsType, StatisticsActionTypes } from './statistics.action-types';

export const fetchStatistics = (): StatisticsActionsType => ({
  type: StatisticsActionTypes.REQUEST_STATISTICS,
});

export const sendStatistics = (gameStats: GameStatistics): StatisticsActionsType => ({
  type: StatisticsActionTypes.SEND_STATISTICS,
  payload: gameStats,
});

export default sendStatistics;
