import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import { hideLoader, showLoader } from '../app/app.actions';
import { FETCH_WORDS, REQUEST_WORDS } from './words.types';
import wordsAPI from '../../api/words-api';

export default function* wordsSagas(): any {
  yield all([
    takeEvery(REQUEST_WORDS, getWordsSaga),
  ]);
}

function* getWordsSaga(action: any): any {
  yield put(showLoader());
  const payload = yield call(
    [wordsAPI, wordsAPI.getWords],
    action.payload.page,
  );
  yield put({ type: FETCH_WORDS, payload });
  yield put(hideLoader());
}
