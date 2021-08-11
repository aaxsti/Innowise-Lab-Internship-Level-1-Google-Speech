import { FC } from 'react';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useDispatch } from 'react-redux';
import {
  WordInfoBlock, WordItemIcons, WordItemWrapper, WordText, WordTranscription,
} from './WordItem.styled';
import { Word } from '../../types/types';
import { getMedia } from '../../redux/words/words.actions';

interface WordItemProps {
    word: Word
    playAudioHandler: (audioSrc: string) => void
}

const WordItem: FC<WordItemProps> = ({ word, playAudioHandler }) => {
  const dispatch = useDispatch();

  const handleSelectImage = () => {
    dispatch(getMedia(word.image, word.audio));
    playAudioHandler(word.audio);
  };

  return (
    <WordItemWrapper onClick={handleSelectImage}>
      <WordItemIcons>
        <VolumeUpRoundedIcon />
        <SkipNextIcon />
      </WordItemIcons>
      <WordInfoBlock>
        <WordText>{word.word}</WordText>
        <WordTranscription>{word.transcription}</WordTranscription>
      </WordInfoBlock>
    </WordItemWrapper>
  );
};

export default WordItem;
