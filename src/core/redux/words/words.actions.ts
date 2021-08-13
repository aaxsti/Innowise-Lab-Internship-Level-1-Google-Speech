import { WordsActionsType, WordsActionTypes } from './words.action-types';

export const fetchWords = (page: string): WordsActionsType => ({
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
