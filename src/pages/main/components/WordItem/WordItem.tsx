import { FC } from 'react';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useDispatch } from 'react-redux';
import { Word } from '../../../../core/interfaces/word';
import { getMedia } from '../../../../core/redux/words/words.actions';
import { WordItemWrapper } from './styled/WordItemWrapper.styled';
import { WordTranscription } from './styled/WordTranscription.styled';
import { WordItemIcons } from './styled/WordItemIcons.styled';

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
      <div>
        <div>{word.word}</div>
        <WordTranscription>{word.transcription}</WordTranscription>
      </div>
    </WordItemWrapper>
  );
};

export default WordItem;
