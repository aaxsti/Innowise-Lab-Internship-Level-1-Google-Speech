import { MediaData } from '../../interfaces/media-data';
import { Word } from '../../interfaces/word';

export enum WordsActionTypes {
  REQUEST_WORDS = 'app.words/REQUEST_WORDS',
  FETCH_WORDS = 'app.words/FETCH_WORDS',
  GET_MEDIA = 'app.words/GET_MEDIA'
}

export interface RequestWordsActionType {
  type: WordsActionTypes.REQUEST_WORDS;
  payload: {
    page: string
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
export type WordsActionsType = RequestWordsActionType
  | FetchWordsActionType
  | GetMediaActionType
