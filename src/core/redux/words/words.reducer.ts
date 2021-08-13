import { MediaData } from '../../interfaces/media-data';
import { Word } from '../../interfaces/word';
import { WordsActionsType, WordsActionTypes } from './words.action-types';

interface InitialState {
    words: Array<Word>
    mediaData: MediaData
}

const initialState = {
  words: [],
  mediaData: {
    imageSrc: '',
    audioSrc: '',
  },
} as InitialState;

type ActionsType = WordsActionsType

const wordsReducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case WordsActionTypes.FETCH_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case WordsActionTypes.GET_MEDIA:
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
};

export default wordsReducer;
