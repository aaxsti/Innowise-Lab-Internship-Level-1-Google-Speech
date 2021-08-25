import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Word } from '../../../../core/interfaces/word';
import {
  addSkippedWord,
  getMedia,
  removeWordFromSkipped,
} from '../../../../core/redux/words/words.actions';
import WordItemWrapper from './styled/WordItemWrapper.styled';
import WordTranscription from './styled/WordTranscription.styled';
import WordItemIcons from './styled/WordItemIcons.styled';
import PlayWordButton from './styled/PlayWordButton.styled';
import SkipWordButton from './styled/SkipWordButton.styled';
import GameStatuses from '../../../../core/components/types/GameStatuses';

interface WordItemProps {
  wordItem: Word
  playAudioHandler: (audioSrc: string) => void
  inputWord: string
  skippedWords: Array<string>
  gameStatus: GameStatuses
}

const WordItem: FC<WordItemProps> = ({
  wordItem, playAudioHandler, inputWord, skippedWords, gameStatus,
}) => {
  const [skipped, setSkipped] = useState<boolean>(false);
  const [corrected, setCorrected] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStatus === 'reseted' || gameStatus === 'resetedOnGame') {
      setSkipped(false);
      setCorrected(false);
    }
  }, [gameStatus]);

  useEffect(() => {
    if (inputWord === wordItem.word) {
      setCorrected(true);
    }
  }, [wordItem.word, inputWord]);

  const handleSelectWord = () => {
    dispatch(getMedia(wordItem.image, wordItem.audio));
    playAudioHandler(wordItem.audio);
  };

  const handleSkipWord = () => {
    if (!skipped) {
      setSkipped(true);
      if (!skippedWords.includes(wordItem.word)) {
        dispatch(addSkippedWord(wordItem.word));
      }
    } else {
      dispatch(removeWordFromSkipped(wordItem.word));
      setSkipped(false);
    }
  };

  return (
    <WordItemWrapper right={corrected} skipped={skipped}>
      <WordItemIcons>
        <PlayWordButton onClick={handleSelectWord} fontSize="large" />
        <SkipWordButton
          onClick={handleSkipWord}
          right={corrected.toString()}
          status={gameStatus.toString()}
          fontSize="large"
        />
      </WordItemIcons>
      <div>
        <div>{wordItem.word}</div>
        <WordTranscription>{wordItem.transcription}</WordTranscription>
      </div>
    </WordItemWrapper>
  );
};

export default WordItem;
