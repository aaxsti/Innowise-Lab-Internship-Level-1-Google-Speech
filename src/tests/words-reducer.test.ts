import {
  addFoundedWord,
  addSkippedWord,
  removeWordFromSkipped, setInputWord,
} from '../core/redux/words/words.actions';
import wordsReducer, { InitialState } from '../core/redux/words/words.reducer';

const state = {
  words: [],
  mediaData: {
    imageSrc: 'image',
    audioSrc: 'audio',
  },
  inputWord: 'hello',
  rightWords: ['age', 'doctor'],
  skippedWords: ['border'],
  gameStatus: 'reseted',
} as InitialState;

describe('Words reducer tests', () => {
  it('length of rightWords should be incremented', () => {
    const action = addFoundedWord('bike');

    const newState = wordsReducer(state, action);

    expect(newState.rightWords.length).toBe(3);
  });

  it('length of skippedWords should be incremented', () => {
    const action = addSkippedWord('choose');

    const newState = wordsReducer(state, action);

    expect(newState.skippedWords.length).toBe(2);
  });

  it('length of skippedWords should be decremented', () => {
    const action = removeWordFromSkipped('border');

    const newState = wordsReducer(state, action);

    expect(newState.skippedWords.length).toBe(0);
  });

  it('input word should be correct', () => {
    const action = setInputWord('curse');

    const newState = wordsReducer(state, action);

    expect(newState.inputWord).toBe('curse');
  });

  it('after deleting word from skipped length shouldn`t be decremented if word is incorrect', () => {
    const action = removeWordFromSkipped('bathroom');

    const newState = wordsReducer(state, action);

    expect(newState.skippedWords.length).toBe(1);
  });
});
