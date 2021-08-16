import axios from 'axios';

const wordsAPI = {
  getWords: (selectedValue: number) => axios
    .get(`https://afternoon-falls-25894.herokuapp.com/words?page=4&group=${selectedValue}`)
    .then((res) => res.data),
};

export default wordsAPI;
