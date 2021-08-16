import { FC } from 'react';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useDispatch } from 'react-redux';
import { Word } from '../../../../core/interfaces/word';
import { getMedia } from '../../../../core/redux/words/words.actions';
import WordItemWrapper from './styled/WordItemWrapper.styled';
import WordTranscription from './styled/WordTranscription.styled';
import WordItemIcons from './styled/WordItemIcons.styled';

interface WordItemProps {
  wordItem: Word
  playAudioHandler: (audioSrc: string) => void
  inputWord: string
  skipWord: () => void
}

const WordItem: FC<WordItemProps> = ({
  wordItem, playAudioHandler, inputWord, skipWord,
}) => {
  const dispatch = useDispatch();

  const handleSelectImage = () => {
    dispatch(getMedia(wordItem.image, wordItem.audio));
    playAudioHandler(wordItem.audio);
  };

  const handleSkipWord = () => {
    skipWord();
  };

  return (
    <WordItemWrapper onClick={handleSelectImage} right={inputWord === wordItem.word}>
      <WordItemIcons>
        <VolumeUpRoundedIcon />
        <SkipNextIcon onClick={handleSkipWord} />
      </WordItemIcons>
      <div>
        <div>{wordItem.word}</div>
        <WordTranscription>{wordItem.transcription}</WordTranscription>
      </div>
    </WordItemWrapper>
  );
};

export default WordItem;
