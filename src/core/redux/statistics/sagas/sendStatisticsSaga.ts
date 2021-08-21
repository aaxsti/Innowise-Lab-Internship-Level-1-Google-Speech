import { call } from 'redux-saga/effects';
import { sendStatisticsActionType } from '../statistics.action-types';
import { SagaWithAction } from '../../global/store';
import { GameStatistics } from '../../../interfaces/game-statistics';
import statisticsAPI from '../../../api/statistics-api';

function* sendStatisticsSagaWorker(action: sendStatisticsActionType)
  : SagaWithAction<GameStatistics> {
  try {
    yield call({ context: statisticsAPI, fn: statisticsAPI.sendStatistics }, action.payload);
  } catch (e) {
    console.log(e);
  }
}

export default sendStatisticsSagaWorker;
