import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Colors from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

const Preloader = styled(CircularProgress)<StyleProps>`
  && {
    color: ${(props) => (props.color ? props.color : Colors.primary)};
  }
`;

export default Preloader;
