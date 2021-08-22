import styled from 'styled-components';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import ModalWindowColors from './constants/colors';

enum PlayAudioModalColors {
  onHover = '#6a6a6a'
}

const PlayAudioModal = styled(VolumeUpRoundedIcon)`
  color: ${ModalWindowColors.secondaryElements};
  cursor: pointer;
  padding-right: 5px;
  
  &:hover {
    color: ${PlayAudioModalColors.onHover};
  }
`;

export default PlayAudioModal;
