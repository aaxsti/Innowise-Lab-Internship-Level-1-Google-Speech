import {
  ChangeEvent, FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Radio } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
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
  removeWordFromSkipped,
  requestWords,
  resetGameState,
  setInputWord,
} from '../../core/redux/words/words.actions';
import Title from '../../core/components/styled/Title.styled';
import sendStatistics from '../../core/redux/statistics/statistics.actions';
import { GameStatistics } from '../../core/interfaces/game-statistics';
import CustomPreloader from '../../core/components/CustomPreloader';
import WordsGroupPages from '../../core/constants/words-group-pages';
import GameStatuses from '../../core/components/types/GameStatuses';
import GameStatusWordsAmount from '../../core/constants/game-status-words-amount';

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & {}

const wordGroups = [
  WordsGroupPages.FirstWordsGroup,
  WordsGroupPages.SecondWordsGroup,
  WordsGroupPages.ThirdWordsGroup,
  WordsGroupPages.FourthWordsGroup,
  WordsGroupPages.FifthWordsGroup,
  WordsGroupPages.SixthWordsGroup,
];

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

  const {
    transcript,
    interimTranscript,
  } = useSpeechRecognition();

  const handleRecordStart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-EN',
    });
  };
  const handleRecordStop = () => {
    SpeechRecognition.stopListening();
  };

  const resetGame = useCallback((resetType: GameStatuses) => {
    setSpokenWord('');
    dispatch(changeGameStatus(resetType));
    dispatch(resetGameState());
  }, [dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedWordsGroupNumber(Number(event.target.value));
    resetGame('reseted');
  };

  useEffect(() => () => {
    resetGame('reseted');
  }, [resetGame]);

  useEffect(() => () => {
    handleRecordStop();
  }, []);

  const levelsRadioButtons = wordGroups.map((groupNumber) => (
    <Radio
      color="primary"
      onChange={handleChange}
      checked={selectedWordsGroupNumber === groupNumber}
      value={groupNumber}
      key={groupNumber.toString()}
    />
  ));

  useEffect(() => {
    dispatch(requestWords(selectedWordsGroupNumber));
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
  }, [finalWord, rightWords, transcript, words, dispatch]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (skippedWords.length + rightWords.length === GameStatusWordsAmount.AllPageWords) {
      const gameStats = {
        login: user?.userEmail,
        level: selectedWordsGroupNumber + 1,
        correct: rightWords.length,
        incorrect: skippedWords.length,
        date: new Date(),
      } as GameStatistics;
      dispatch(changeGameStatus('passed'));
      dispatch(sendStatistics(gameStats));
      handleModalOpen();
      toast.info(t('main-page.words-game-passed-text'));
    }
  }, [t, user?.userEmail, selectedWordsGroupNumber, skippedWords, rightWords, dispatch]);

  const playAudio = useCallback((audioSrc: string) => {
    const audio: HTMLAudioElement = new Audio(`${Urls.Media}${audioSrc}`);
    audio?.play();
  }, []);

  const signOutHandler = () => {
    dispatch(logoutUser());
    resetGame('reseted');
    history.push(Routes.Start);
  };

  if (wordItems.length === 0 || !user) {
    return (
      <CustomPreloader colored={Colors.primary} size={ElementsSizes.LargePreloader} />
    );
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
        {`${rightWords.length} ${t('main-page.words-amount-word')} ${words.length}`}
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
          gameStatus={gameStatus}
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
