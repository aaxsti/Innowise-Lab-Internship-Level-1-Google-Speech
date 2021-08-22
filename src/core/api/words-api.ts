import axios from 'axios';
import Urls from '../constants/urls';

const wordsAPI = {
  getWords: (selectedValue: number) => axios
    .get(`${Urls.Words}?page=3&group=${selectedValue}`)
    .then((res) => res.data),
};

export default wordsAPI;
