import { MediaData } from '../../interfaces/media-data';
import { Word } from '../../interfaces/word';

export enum WordsActionTypes {
  REQUEST_WORDS = 'app.words/REQUEST_WORDS',
  FETCH_WORDS = 'app.words/FETCH_WORDS',
  GET_MEDIA = 'app.words/GET_MEDIA',
  SET_INPUT_WORD = 'app.words/SET_INPUT_WORD',
  ADD_FOUNDED_WORD = 'app.words/ADD_FOUNDED_WORD',
  RESET_GAME_STATE = 'app.words/RESET_GAME_STATE',
}

export interface RequestWordsActionType {
  type: WordsActionTypes.REQUEST_WORDS;
  payload: {
    page: number
  },
}

export interface FetchWordsActionType {
  type: WordsActionTypes.FETCH_WORDS;
  payload: Array<Word>
}

export interface GetMediaActionType {
  type: WordsActionTypes.GET_MEDIA;
  payload: MediaData
}

export interface SetInputWordActionType {
  type: WordsActionTypes.SET_INPUT_WORD;
  payload: {
    inputWord: string
  },
}

export interface AddFoundedWordActionType {
  type: WordsActionTypes.ADD_FOUNDED_WORD,
  payload: {
    foundedWord: string
  },
}

export interface ResetGameStateActionType {
  type: WordsActionTypes.RESET_GAME_STATE,
}

export type WordsActionsType = RequestWordsActionType
  | FetchWordsActionType
  | GetMediaActionType
  | SetInputWordActionType
  | AddFoundedWordActionType
  | ResetGameStateActionType
