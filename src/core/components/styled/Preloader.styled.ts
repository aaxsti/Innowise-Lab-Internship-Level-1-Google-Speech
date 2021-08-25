import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Colors from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

const Preloader = styled(CircularProgress)<StyleProps>`
  && {
    display: block;
    color: ${(props) => (props.colored ?? Colors.mainText)};
  }
`;

export default Preloader;
