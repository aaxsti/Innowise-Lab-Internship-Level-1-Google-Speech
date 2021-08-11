import { FETCH_WORDS, GET_MEDIA } from './words.types';
import { Word } from '../../types/types';

interface IInitialState {
    words: Array<Word>
    mediaData: {
        imageSrc: string
        audioSrc: string
    }
}

const initialState = {
  words: [] as any,
  mediaData: {
    imageSrc: '',
    audioSrc: '',
  },
} as IInitialState;

type ActionsType = any

export default function wordsReducer(state = initialState, action: ActionsType): IInitialState {
  switch (action.type) {
    case FETCH_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case GET_MEDIA:
      return {
        ...state,
        mediaData: {
          imageSrc: action.payload.imageSrc,
          audioSrc: action.payload.audioSrc,
        },
      };
    default:
      return state;
  }
}
