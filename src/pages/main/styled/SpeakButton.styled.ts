import styled from 'styled-components';
import MenuButton from '../../../core/components/styled/MenuButton.styled';

enum SpeakButtonColors {
  record = '#e33232',
  recordHover = '#ee7676'
}

const SpeakButton = styled(MenuButton)<{onClick?: () => void, recording: string}>`
  && {
    background-color: ${(props) => (props.recording === 'yes' && SpeakButtonColors.record)};
  }


  &&:hover {
    background-color: ${(props) => (props.recording === 'yes' && SpeakButtonColors.recordHover)};
  }
  
  grid-column: span 2;
`;

export default SpeakButton;
