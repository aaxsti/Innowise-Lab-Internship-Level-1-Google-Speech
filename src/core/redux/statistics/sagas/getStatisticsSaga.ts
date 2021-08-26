import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import statisticsAPI from '../../../api/statistics-api';
import { fetchStatistics } from '../statistics.actions';
import { GameStatistics } from '../../../interfaces/game-statistics';
import { SagaWithServerResponse } from '../../global/store';

function* getStatisticsSagaWorker(): SagaWithServerResponse<Array<GameStatistics>> {
  try {
    const payload = yield call({ context: statisticsAPI, fn: statisticsAPI.getStatistics });
    yield put(fetchStatistics(payload));
  } catch (error) {
    toast.info(error.message);
  }
}

export default getStatisticsSagaWorker;
