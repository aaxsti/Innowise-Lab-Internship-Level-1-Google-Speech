import firebase from 'firebase/app';

export type User = firebase.User;

export interface Word {
    id: string
    group: number
    page: number
    word: string
    image: string
    audio: string
    audioMeaning: string
    audioExample: string
    textMeaning: string
    textExample: string
    transcription: string
    textExampleTranslate: string
    textMeaningTranslate: string
    wordTranslate: string
    wordPerExampleSentence: number
}
