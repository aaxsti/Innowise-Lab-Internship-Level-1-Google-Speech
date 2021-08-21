import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContent, ModalContentBlock, ModalWindow } from './styled/ModalContent.styled';
import { Word } from '../../../../core/interfaces/word';
import ResultWordLists from './styled/ResultWordList.styled';
import ResultWordListItem from './styled/ResultWordListItem.styled';
import WrongWordsList from './styled/WrongWords.styled';
import RightWordsList from './styled/RightWords.styled';
import CloseModalButton from './styled/CloseModalButton.styled';
import ModalWordText from './styled/ModalWordText.styled';
import ModalWordTranscription from './styled/ModalWordTranscription.styled';
import Title from '../../../../core/components/styled/Title.styled';
import Colors from '../../../../core/constants/colors';
import ElementsSizes from '../../../../core/constants/sizes';
import ModalWordsAmount from './styled/ModalWordsAmount.styled';
import PlayAudioModal from './styled/PlayAudioModal.styled';

interface ComponentProps {
  modalOpen: boolean
  handleModalClose: () => void
  wordItems: Array<Word>
  rightWords: Array<string>
  playAudioHandler: (audioSrc: string) => void
}

const ResultsModal: FC<ComponentProps> = ({
  modalOpen, handleModalClose, wordItems, rightWords, playAudioHandler,
}) => {
  const [t] = useTranslation();

  const handleClose = () => {
    handleModalClose();
  };

  const handlePlayAudio = (audioSrc: string) => {
    playAudioHandler(audioSrc);
  };

  const selectWords = (wordsType: 'right' | 'wrong') => wordItems
    .filter((el) => (wordsType === 'right' ? rightWords.includes(el.word) : !rightWords.includes(el.word)))
    .map((wordItem) => (
      <ResultWordListItem key={wordItem.id}>
        <PlayAudioModal onClick={() => handlePlayAudio(wordItem.audio)} />
        <ModalWordText>{wordItem.word}</ModalWordText>
        <ModalWordTranscription>{wordItem.transcription}</ModalWordTranscription>
      </ResultWordListItem>
    ));

  const wrongWordsListItems = selectWords('wrong');
  const rightWordsListItems = selectWords('right');

  return (
    <ModalWindow
      open={modalOpen}
      onClose={handleClose}
    >
      <ModalContent>
        <ModalContentBlock>
          <ResultWordLists>
            <WrongWordsList>
              <Title
                color={Colors.mainText}
                size={ElementsSizes.additionalTitle}
              >
                {t('main-page.modal-wrong-title')}
                <ModalWordsAmount>
                  [
                  {wrongWordsListItems.length}
                  ]
                </ModalWordsAmount>
              </Title>
              {wrongWordsListItems}
            </WrongWordsList>
            <RightWordsList>
              <Title
                color={Colors.mainText}
                size={ElementsSizes.additionalTitle}
              >
                {t('main-page.modal-right-title')}
                <ModalWordsAmount>
                  [
                  {rightWordsListItems.length}
                  ]
                </ModalWordsAmount>
              </Title>
              {rightWordsListItems}
            </RightWordsList>
          </ResultWordLists>
          <CloseModalButton variant="contained" color="primary" onClick={handleClose}>{t('main-page.modal-close-button')}</CloseModalButton>
        </ModalContentBlock>
      </ModalContent>
    </ModalWindow>
  );
};

export default ResultsModal;
