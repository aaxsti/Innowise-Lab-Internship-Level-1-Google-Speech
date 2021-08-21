import { all, takeEvery } from 'redux-saga/effects';
import { SagaWithoutAction } from '../../global/store';
import { StatisticsActionTypes } from '../statistics.action-types';
import sendStatisticsSagaWorker from './sendStatisticsSaga';
import getStatisticsSagaWorker from './getStatisticsSaga';

export default function* statisticsSagasWatcher(): SagaWithoutAction {
  yield all([
    takeEvery(StatisticsActionTypes.SEND_STATISTICS, sendStatisticsSagaWorker),
    takeEvery(StatisticsActionTypes.REQUEST_STATISTICS, getStatisticsSagaWorker),
  ]);
}
