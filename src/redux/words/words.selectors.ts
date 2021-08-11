import { createSelector } from 'reselect';
import { AppState } from '../store';

const words = (state: AppState) => state.words;

export const selectWords = createSelector(
  [words],
  (words) => words.words,
);

export const selectWordMedia = createSelector(
  [words],
  (words) => ({
    image: words.mediaData.imageSrc,
    audio: words.mediaData.audioSrc,
  }),
);
