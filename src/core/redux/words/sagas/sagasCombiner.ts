import { all, takeEvery } from 'redux-saga/effects';
import { SagaWithoutAction } from '../../global/store';
import { WordsActionTypes } from '../words.action-types';
import getWordsSagaWorker from './getWordsSaga';

export default function* wordsSagasWatcher(): SagaWithoutAction {
  yield all([
    takeEvery(WordsActionTypes.REQUEST_WORDS, getWordsSagaWorker),
  ]);
}
