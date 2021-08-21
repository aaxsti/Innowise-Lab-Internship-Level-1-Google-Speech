import {
  ChangeEvent, FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Radio } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useTranslation } from 'react-i18next';
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
import ElementsSizes from '../../core/constants/sizes';
import MenuButtons from './components/MenuButtons/MenuButtons';
import WordOutput from './styled/WordOutput.styled';
import RightWordsAmount from './styled/RightWordsAmount.styled';
import ResultsModal from './components/ResultsModal/ResultsModal';
import {
  selectGameStatus,
  selectInputWord,
  selectRightWords,
  selectSkippedWords,
  selectWordItems,
  selectWordMedia,
} from '../../core/redux/words/words.selectors';
import {
  addFoundedWord,
  changeGameStatus,
  fetchWords,
  removeWordFromSkipped,
  resetGameState,
  setInputWord,
} from '../../core/redux/words/words.actions';
import Title from '../../core/components/styled/Title.styled';
import sendStatistics from '../../core/redux/statistics/statistics.actions';
import { GameStatistics } from '../../core/interfaces/game-statistics';

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & {}

const groupNumberList = [0, 1, 2, 3, 4, 5];

const MainPage: FC<PropsType> = ({ history }) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const [selectedWordsGroupNumber, setSelectedWordsGroupNumber] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [spokenWord, setSpokenWord] = useState<string>('');

  const wordItems = useSelector(selectWordItems);
  const user = useSelector(selectUser);
  const media = useSelector(selectWordMedia);
  const inputWord = useSelector(selectInputWord);
  const rightWords = useSelector(selectRightWords);
  const skippedWords = useSelector(selectSkippedWords);
  const gameStatus = useSelector(selectGameStatus);

  const { transcript, interimTranscript } = useSpeechRecognition();

  const resetGame = useCallback(() => {
    setSpokenWord('');
    dispatch(changeGameStatus('reseted'));
    dispatch(resetGameState());
  }, [dispatch]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSelectedWordsGroupNumber(Number(event.target.value));
    resetGame();
  }, [resetGame]);

  const levelsRadioButtons = useMemo(() => groupNumberList.map((num) => (
    <Radio
      color="primary"
      onChange={handleChange}
      checked={selectedWordsGroupNumber === num}
      value={num}
      key={num.toString()}
    />
  )), [handleChange, selectedWordsGroupNumber]);

  useEffect(() => {
    dispatch(fetchWords(selectedWordsGroupNumber));
  }, [selectedWordsGroupNumber, dispatch]);

  const finalWord = interimTranscript.toLowerCase();
  const words = useMemo(() => (wordItems.map((el) => (el.word))), [wordItems]);
  useEffect(() => {
    if (transcript !== '') {
      setSpokenWord('');
      setSpokenWord(finalWord);
      dispatch(setInputWord(finalWord));

      const foundedWord = words.find((el) => (el === finalWord));
      if (foundedWord && !rightWords.includes(foundedWord)) {
        dispatch(addFoundedWord(foundedWord));
        dispatch(removeWordFromSkipped(foundedWord));
      }
    }
  }, [rightWords, transcript, words, dispatch]);

  useEffect(() => {
    if (skippedWords.length + rightWords.length === 10) {
      const gameStats = {
        login: user?.userEmail,
        level: selectedWordsGroupNumber + 1,
        correct: rightWords.length,
        incorrect: skippedWords.length,
        date: new Date(),
      } as GameStatistics;
      dispatch(changeGameStatus('passed'));
      dispatch(sendStatistics(gameStats));
    }
  }, [user?.userEmail, selectedWordsGroupNumber, skippedWords, rightWords, dispatch]);

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

  const handleRecordStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-EN' });
  };
  const handleRecordStop = () => {
    SpeechRecognition.stopListening();
  };

  const signOutHandler = () => {
    dispatch(logoutUser());
    resetGame();
    history.push(Routes.Start);
  };

  if (wordItems.length === 0 || !user) {
    return <Preloader colored={Colors.primary} size={ElementsSizes.LargePreloader} />;
  }
  if (!user) {
    history.push(Routes.Start);
  }

  return (
    <MainPageWrapper>
      <div>
        <Title
          color={Colors.mainText}
          size={ElementsSizes.additionalTitle}
        >
          {t('main-page.words-difficulty-title')}
        </Title>
        <span>{t('main-page.words-difficulty-easy')}</span>
        {levelsRadioButtons}
        <span>{t('main-page.words-difficulty-hard')}</span>
      </div>

      <RightWordsAmount amount={rightWords.length}>
        {rightWords.length}
        /10
      </RightWordsAmount>

      <WordImage image={media.image} />

      <WordOutput>
        {spokenWord}
      </WordOutput>

      <WordsBlock>
        {wordItems.map((wordItem: Word) => (
          <WordItem
            gameStatus={gameStatus}
            wordItem={wordItem}
            skippedWords={skippedWords}
            key={wordItem.id}
            inputWord={inputWord}
            playAudioHandler={playAudio}
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
        playAudioHandler={playAudio}
      />

      <UserManage
        userEmail={user?.userEmail}
        signOut={signOutHandler}
      />

    </MainPageWrapper>
  );
};

export default withRouter(MainPage);
