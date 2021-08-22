import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SagaWithoutAction } from '../../global/store';
import statisticsAPI from '../../../api/statistics-api';
import { StatisticsActionTypes } from '../statistics.action-types';

function* getStatisticsSagaWorker(): SagaWithoutAction {
  try {
    const payload = yield call({ context: statisticsAPI, fn: statisticsAPI.getStatistics });
    yield put({ type: StatisticsActionTypes.FETCH_STATISTICS, payload });
  } catch (e) {
    toast.info(e.message);
  }
}

export default getStatisticsSagaWorker;
