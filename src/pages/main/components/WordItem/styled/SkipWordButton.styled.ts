import styled from 'styled-components';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Colors from '../../../../../core/constants/colors';

const SkipWordButton = styled(SkipNextIcon)<{right: string, status: string}>`
  cursor: pointer;
  color: ${Colors.noColor};
  
  && { 
    display: ${(props) => ((props.right === 'true' || props.status === 'passed') && 'none')};
  }
`;

export default SkipWordButton;
