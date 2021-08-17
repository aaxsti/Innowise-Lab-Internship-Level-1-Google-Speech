import { FC, useMemo } from 'react';
import MenuButton from '../../../../core/components/styled/MenuButton.styled';
import { ModalContent, ModalContentBlock, ModalWindow } from './styled/ModalContent.styled';
import { Word } from '../../../../core/interfaces/word';
import ResultWordList from './styled/ResultWordList.styled';
import ResultWordListItem from './styled/ResultWordListItem.styled';

interface ComponentProps {
  modalOpen: boolean
  handleModalClose: () => void
  wordItems: Array<Word>
  rightWords: Array<string>
}

const ResultsModal: FC<ComponentProps> = ({
  modalOpen, handleModalClose, wordItems, rightWords,
}) => {
  const handleClose = () => {
    handleModalClose();
  };

  const wrongWords = useMemo(() => (
    wordItems.map((el) => (el.word)).filter((el) => (!rightWords.includes(el)))
  ), [wordItems, rightWords]);

  return (
    <ModalWindow
      open={modalOpen}
      onClose={handleClose}
    >
      <ModalContent>
        <ModalContentBlock>

          <ResultWordList>
            {wordItems.map((wordItem) => (
              <ResultWordListItem key={wordItem.id}>
                {wordItem.word}
                {wordItem.transcription}
              </ResultWordListItem>
            ))}
            {wrongWords.map((word) => (
              <ResultWordListItem key={word}>
                {word}
              </ResultWordListItem>
            ))}
          </ResultWordList>

          <MenuButton onClick={handleClose}>Return</MenuButton>
        </ModalContentBlock>
      </ModalContent>
    </ModalWindow>
  );
};

export default ResultsModal;
