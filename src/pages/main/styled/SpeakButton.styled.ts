import styled from 'styled-components';
import MenuButton from '../../../core/components/styled/MenuButton.styled';
import Colors from '../../../core/constants/colors';

enum SpeakButtonColors {
  record = '#910000',
  recordHover = '#d30000'
}

const SpeakButton = styled(MenuButton)<{onClick?: () => void, recording: string}>`
  && {
    font-size: 20px;
    text-transform: capitalize;
    background-color: ${(props) => (props.recording === 'yes' ? SpeakButtonColors.record : Colors.mainButton)};
  }

  &&:hover {
    background-color: ${(props) => (props.recording === 'yes' ? SpeakButtonColors.recordHover : Colors.mainButtonHover)};
  }
  
  grid-column: span 2;
`;

export default SpeakButton;
