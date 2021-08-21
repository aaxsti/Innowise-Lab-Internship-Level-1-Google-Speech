import styled from 'styled-components';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';

enum PlayWordButtonColors {
  onFocus = '#292929'
}

const PlayWordButton = styled(VolumeUpRoundedIcon)`
  cursor: pointer;
  
  &:hover {
    color: ${PlayWordButtonColors.onFocus};
  }
`;

export default PlayWordButton;
