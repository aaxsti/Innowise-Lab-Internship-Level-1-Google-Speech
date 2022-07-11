import axios from 'axios';
import { toast } from 'react-toastify';
import Urls from '../constants/urls';
import { Word } from '../interfaces/word';

const wordsAPI = {
  getWords: (selectedValue: number) => axios.get<Array<Word>>(`${Urls.Words}?page=3&group=${selectedValue}`)
    .then((res) => res.data)
    .catch((error) => toast.info(error.message)),
};

export default wordsAPI;
