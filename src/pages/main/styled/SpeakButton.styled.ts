import styled from 'styled-components';
import MenuButton from '../../../core/components/styled/MenuButton.styled';

enum SpeakButtonColors {
  record = '#e33232',
  recordHover = '#ee7676'
}

const SpeakButton = styled(MenuButton)<{onClick?: () => void, recording: string}>`
  && {
    width: 220px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: ${(props) => (props.recording === 'yes' && SpeakButtonColors.record)};
  }

  &&:last-child {
    margin-right: 0;
  }
  
  &&:hover {
    background-color: ${(props) => (props.recording === 'yes' && SpeakButtonColors.recordHover)};
  }
`;

export default SpeakButton;
