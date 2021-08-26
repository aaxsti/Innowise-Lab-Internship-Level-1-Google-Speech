import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuButton from '../../../../core/components/styled/MenuButton.styled';
import SpeakButton from '../../styled/SpeakButton.styled';
import Routes from '../../../../core/constants/routes';
import CustomLink from '../../../../core/components/styled/CustomLink.styled';
import GameStatuses from '../../../../core/components/types/GameStatuses';

interface ComponentProps {
  recordPlay: () => void
  recordStop: () => void
  handleModalOpen: () => void
  resetGame: (resetType: GameStatuses) => void
  gameStatus: GameStatuses
}

type RecordingStatus = 'yes' | 'no';

const MenuButtons: FC<ComponentProps> = ({
  recordPlay, recordStop, handleModalOpen, resetGame, gameStatus,
}) => {
  const [t] = useTranslation();
  const [isRecording, setIsRecording] = useState<RecordingStatus>('no');

  const handleOpen = () => {
    handleModalOpen();
  };

  const handleStartRecord = () => {
    recordPlay();
    setIsRecording('yes');
  };

  const handleStopRecord = () => {
    recordStop();
    setIsRecording('no');
  };

  const handleResetGame = () => {
    if (gameStatus === 'passed' || gameStatus === 'resetedOnGame') {
      resetGame('reseted');
    } else {
      resetGame('resetedOnGame');
    }
  };

  return (
    <>
      <MenuButton
        variant="contained"
        color="primary"
        onClick={handleResetGame}
      >
        {t('main-page.restart-button')}
      </MenuButton>

      <SpeakButton
        variant="contained"
        color="primary"
        recording={isRecording}
        onClick={isRecording === 'yes' ? handleStopRecord : handleStartRecord}
      >
        {isRecording === 'yes' ? t('main-page.stop-button') : t('main-page.speak-button')}
      </SpeakButton>

      <MenuButton
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        {t('main-page.results-button')}
      </MenuButton>

      <MenuButton variant="contained" color="primary" to={Routes.Statistics} component={CustomLink}>
        {t('main-page.statistics-button')}
      </MenuButton>
    </>
  );
};

export default MenuButtons;
