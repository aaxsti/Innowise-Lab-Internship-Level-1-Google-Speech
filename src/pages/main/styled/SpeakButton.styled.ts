import styled from 'styled-components';
import MenuButton from '../../../core/components/styled/MenuButton.styled';
import Colors from '../../../core/constants/colors';

const SpeakButton = styled(MenuButton)<{onClick?: () => void, recording: string}>`
  && {
    font-size: 20px;
    text-transform: capitalize;
    background-color: ${(props) => (props.recording === 'yes' ? Colors.red : Colors.green)};
  }

  &&:hover {
    background-color: ${(props) => (props.recording === 'yes' ? Colors.redHover : Colors.greenHover)};
  }
  
  grid-column: span 2;
`;

export default SpeakButton;
