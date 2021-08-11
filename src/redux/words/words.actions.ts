import { GET_MEDIA, REQUEST_WORDS } from './words.types';

export const fetchWords = (page: string) => ({
  type: REQUEST_WORDS,
  payload: {
    page,
  },
});

export const getMedia = (imageSrc: string, audioSrc: string) => ({
  type: GET_MEDIA,
  payload: {
    imageSrc,
    audioSrc,
  },
});
