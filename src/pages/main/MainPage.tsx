import {
  ChangeEvent, FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Radio } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { logoutUser } from '../../core/redux/auth/auth.actions';
import { selectUser } from '../../core/redux/auth/auth.selectors';
import WordItem from './components/WordItem/WordItem';
import WordImage from './components/WordImage/WordImage';
import { Word } from '../../core/interfaces/word';
import Routes from '../../core/constants/routes';
import MainPageWrapper from './styled/MainPageWrapper.styled';
import WordsBlock from './styled/WordsBlock.styled';
import Urls from '../../core/constants/urls';
import UserManage from './components/UserManage/UserManage';
import Preloader from '../../core/components/styled/Preloader.styled';
import Colors from '../../core/constants/colors';
import Sizes from '../../core/constants/sizes';
import MenuButtons from './components/MenuButtons/MenuButtons';
import WordOutput from './styled/WordOutput.styled';
import RightWordsAmount from './styled/RightWordsAmount.styled';
import ResultsModal from './components/ResultsModal/ResultsModal';
import {
  selectInputWord,
  selectRightWords,
  selectWordItems,
  selectWordMedia,
} from '../../core/redux/words/words.selectors';
import {
  addFoundedWord, fetchWords, resetGameState, setInputWord,
} from '../../core/redux/words/words.actions';

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & {}

const MainPage: FC<PropsType> = ({ history }) => {
  const [selectedWordsGroupNumber, setSelectedWordsGroupNumber] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [spokenWord, setSpokenWord] = useState<string>('');

  const dispatch = useDispatch();

  const groupNumberList = [0, 1, 2, 3, 4, 5];

  const wordItems = useSelector(selectWordItems);
  const user = useSelector(selectUser);
  const media = useSelector(selectWordMedia);
  const inputWord = useSelector(selectInputWord);
  const rightWords = useSelector(selectRightWords);

  const { transcript, interimTranscript } = useSpeechRecognition();

  const words = useMemo(() => (wordItems.map((el) => (el.word))), [wordItems]);

  const resetGame = () => {
    setSpokenWord('');
    dispatch(resetGameState());
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedWordsGroupNumber(Number(event.target.value));
    resetGame();
  };

  useEffect(() => {
    dispatch(fetchWords(selectedWordsGroupNumber));
  }, [selectedWordsGroupNumber, dispatch]);

  const finalWord = interimTranscript.toLowerCase();

  useEffect(() => {
    if (transcript !== '') {
      setSpokenWord('');
      setSpokenWord(finalWord);
      dispatch(setInputWord(finalWord));

      const foundedWord = words.find((el) => (el === finalWord));
      if (foundedWord && !rightWords.includes(foundedWord)) dispatch(addFoundedWord(foundedWord));
    }
  }, [rightWords, transcript, words, dispatch, finalWord]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const playAudio = useCallback((audioSrc: string) => {
    const audio: HTMLAudioElement = new Audio(`${Urls.Media}${audioSrc}`);
    audio?.play();
  }, []);

  const skipWord = () => {

  };

  const signOutHandler = () => {
    dispatch(logoutUser());
    history.push(Routes.Start);
  };

  const handleRecordStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-EN' });
  };

  const handleRecordStop = () => {
    SpeechRecognition.stopListening();
  };

  if (wordItems.length === 0 || !user) {
    return <Preloader ownColor={Colors.primary} size={Sizes.LargePreloader} />;
  }
  if (!user) {
    history.push(Routes.Start);
  }

  return (
    <MainPageWrapper>
      <div>
        {groupNumberList.map((num) => (
          <Radio
            color="primary"
            onChange={handleChange}
            checked={selectedWordsGroupNumber === num}
            value={num}
            key={num.toString()}
          />
        ))}
      </div>

      <RightWordsAmount amount={rightWords.length}>
        {rightWords.length}
        /10
      </RightWordsAmount>

      <br />

      <WordImage image={media.image} />

      <WordOutput>
        {spokenWord}
      </WordOutput>

      <WordsBlock>
        {wordItems.map((wordItem: Word) => (
          <WordItem
            wordItem={wordItem}
            key={wordItem.id}
            inputWord={inputWord}
            playAudioHandler={playAudio}
            skipWord={skipWord}
          />
        ))}

        <MenuButtons
          recordPlay={handleRecordStart}
          resetGame={resetGame}
          recordStop={handleRecordStop}
          handleModalOpen={handleModalOpen}
        />

      </WordsBlock>

      <ResultsModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        wordItems={wordItems}
        rightWords={rightWords}
      />

      <UserManage
        userEmail={user?.userEmail}
        signOut={signOutHandler}
      />

    </MainPageWrapper>
  );
};

export default withRouter(MainPage);
