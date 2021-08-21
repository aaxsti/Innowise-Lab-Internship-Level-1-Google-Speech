import { call, put } from 'redux-saga/effects';
import { RequestWordsActionType, WordsActionTypes } from '../words.action-types';
import { SagaWithoutAction } from '../../global/store';
import { hideLoader, showLoader } from '../../app/app.actions';
import wordsAPI from '../../../api/words-api';

function* getWordsSagaWorker(action: RequestWordsActionType): SagaWithoutAction {
  yield put(showLoader());
  const payload = yield call(
    [wordsAPI, wordsAPI.getWords],
    action.payload.page,
  );
  yield put({ type: WordsActionTypes.FETCH_WORDS, payload });
  yield put(hideLoader());
}

export default getWordsSagaWorker;
