import { MediaData } from '../../interfaces/media-data';
import { Word } from '../../interfaces/word';
import { WordsActionsType, WordsActionTypes } from './words.action-types';

interface InitialState {
  words: Array<Word>
  mediaData: MediaData
  inputWord: string
  rightWords: Array<string>
}

const initialState = {
  words: [],
  mediaData: {
    imageSrc: '',
    audioSrc: '',
  },
  inputWord: '',
  rightWords: [],
} as InitialState;

type ActionsType = WordsActionsType

const wordsReducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case WordsActionTypes.FETCH_WORDS:
      return {
        ...state,
        words: action.payload.slice(0, 10),
      };
    case WordsActionTypes.GET_MEDIA:
      return {
        ...state,
        mediaData: {
          imageSrc: action.payload.imageSrc,
          audioSrc: action.payload.audioSrc,
        },
      };
    case WordsActionTypes.SET_INPUT_WORD:
      return {
        ...state,
        inputWord: action.payload.inputWord,
      };
    case WordsActionTypes.ADD_FOUNDED_WORD:
      return {
        ...state,
        rightWords: [...state.rightWords, action.payload.foundedWord],
      };
    case WordsActionTypes.RESET_GAME_STATE:
      return {
        ...state,
        mediaData: {
          imageSrc: '',
          audioSrc: '',
        },
        inputWord: '',
        rightWords: [],
      };
    default:
      return state;
  }
};

export default wordsReducer;
