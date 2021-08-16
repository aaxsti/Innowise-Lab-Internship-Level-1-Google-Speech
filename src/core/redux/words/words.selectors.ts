import { createSelector } from 'reselect';
import { AppState } from '../global/store';

const words = (state: AppState) => state.words;

export const selectWordItems = createSelector(
  [words],
  (words) => words.words,
);

export const selectWords = createSelector(
  [selectWordItems],
  (selectWordItems) => selectWordItems.map((el) => (el.word)),
);

export const selectInputWord = createSelector(
  [words],
  (words) => words.inputWord,
);

export const selectRightWords = createSelector(
  [words],
  (words) => words.rightWords,
);

export const selectWordMedia = createSelector(
  [words],
  (words) => ({
    image: words.mediaData.imageSrc,
    audio: words.mediaData.audioSrc,
  }),
);
