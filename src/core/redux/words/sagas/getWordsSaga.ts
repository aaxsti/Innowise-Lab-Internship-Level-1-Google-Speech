import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { RequestWordsActionType } from '../words.action-types';
import { SagaWithServerResponse } from '../../global/store';
import { hideLoader, showLoader } from '../../app/app.actions';
import wordsAPI from '../../../api/words-api';
import { fetchWords } from '../words.actions';
import { Word } from '../../../interfaces/word';

function* getWordsSagaWorker(action: RequestWordsActionType): SagaWithServerResponse<Array<Word>> {
  try {
    yield put(showLoader());
    const payload = yield call(
      [wordsAPI, wordsAPI.getWords],
      action.payload.page,
    );
    yield put(fetchWords(payload));
    yield put(hideLoader());
  } catch (error) {
    toast.info(error.message);
    yield put(hideLoader());
  }
}

export default getWordsSagaWorker;
