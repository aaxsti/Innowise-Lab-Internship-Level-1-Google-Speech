import axios from 'axios';

const wordsAPI = {
  getWords: (selectedValue: string) => axios
    .get(`https://afternoon-falls-25894.herokuapp.com/words?page=2&group=${selectedValue}`)
    .then((res) => res.data),
};

export default wordsAPI;
