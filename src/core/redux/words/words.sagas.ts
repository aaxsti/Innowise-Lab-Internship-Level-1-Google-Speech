import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import { hideLoader, showLoader } from '../app/app.actions';
import wordsAPI from '../../api/words-api';
import { WordsActionTypes } from './words.action-types';
import { SagaWithoutAction } from '../global/store';

export default function* wordsSagas(): SagaWithoutAction {
  yield all([
    takeEvery(WordsActionTypes.REQUEST_WORDS, getWordsSaga),
  ]);
}

function* getWordsSaga(action: any): SagaWithoutAction {
  yield put(showLoader());
  const payload = yield call(
    [wordsAPI, wordsAPI.getWords],
    action.payload.page,
  );
  yield put({ type: WordsActionTypes.FETCH_WORDS, payload });
  yield put(hideLoader());
}
