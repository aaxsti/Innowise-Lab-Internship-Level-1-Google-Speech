import { WordsActionsType, WordsActionTypes } from './words.action-types';

export const fetchWords = (page: number): WordsActionsType => ({
  type: WordsActionTypes.REQUEST_WORDS,
  payload: {
    page,
  },
});

export const getMedia = (imageSrc: string, audioSrc: string): WordsActionsType => ({
  type: WordsActionTypes.GET_MEDIA,
  payload: {
    imageSrc,
    audioSrc,
  },
});

export const setInputWord = (inputWord: string): WordsActionsType => ({
  type: WordsActionTypes.SET_INPUT_WORD,
  payload: {
    inputWord,
  },
});

export const addFoundedWord = (foundedWord: string): WordsActionsType => ({
  type: WordsActionTypes.ADD_FOUNDED_WORD,
  payload: {
    foundedWord,
  },
});

export const addSkippedWord = (skippedWord: string): WordsActionsType => ({
  type: WordsActionTypes.ADD_SKIPPED_WORD,
  payload: {
    skippedWord,
  },
});

export const removeWordFromSkipped = (removeWord: string): WordsActionsType => ({
  type: WordsActionTypes.REMOVE_WORD_FROM_SKIPPED,
  payload: {
    removeWord,
  },
});

export const resetGameState = (): WordsActionsType => ({
  type: WordsActionTypes.RESET_GAME_STATE,
});

export const changeGameStatus = (gameStatus: 'passed' | 'reseted' | 'resetedOnGame'): WordsActionsType => ({
  type: WordsActionTypes.CHANGE_GAME_STATUS,
  payload: {
    gameStatus,
  },
});
