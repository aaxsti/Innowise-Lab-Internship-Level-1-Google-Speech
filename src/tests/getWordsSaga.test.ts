import { call, put } from 'redux-saga/effects';
import getWordsSagaWorker from '../core/redux/words/sagas/getWordsSaga';
import { WordsActionTypes } from '../core/redux/words/words.action-types';
import { hideLoader, showLoader } from '../core/redux/app/app.actions';
import wordsAPI from '../core/api/words-api';
import { fetchWords } from '../core/redux/words/words.actions';
import { Word } from '../core/interfaces/word';

const wordsMock = [
  {
    id: '5e9f5ee35eb9e72bc21af9a0',
    group: 2,
    page: 4,
    word: 'acquaint',
    image: 'files/05_1281.jpg',
    audio: 'files/05_1281.mp3',
    audioMeaning: 'files/05_1281_meaning.mp3',
    audioExample: 'files/05_1281_example.mp3',
    textMeaning: 'To <i>acquaint</i> is to get to know something or someone.',
    textExample: 'Nancy <b>acquainted</b> herself with the new computer.',
    transcription: '[əkwéint]',
    textExampleTranslate: 'Нэнси познакомилась с новым компьютером',
    textMeaningTranslate: 'Познакомиться - значит узнать что-то или кого-то',
    wordTranslate: 'знакомят',
    wordPerExampleSentence: 7,
  },
] as Array<Word>;

describe('getWordsSaga', () => {
  it('success triggers, success action with statistics', () => {
    const generator = getWordsSagaWorker({
      type: WordsActionTypes.REQUEST_WORDS,
      payload: { page: 2 },
    });
    const payload = wordsMock;

    expect(generator.next().value)
      .toEqual(put(showLoader()));

    expect(generator.next().value)
      .toEqual(call([wordsAPI, wordsAPI.getWords], 2));

    expect(generator.next(payload).value)
      .toEqual(put(fetchWords(payload)));

    expect(generator.next().value)
      .toEqual(put(hideLoader()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
