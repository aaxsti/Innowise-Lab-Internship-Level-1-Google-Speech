import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Colors from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

const Preloader = styled(CircularProgress)<StyleProps>`
  && {
    color: ${(props) => (props.ownColor ? props.ownColor : Colors.primary)};
  }
`;

export default Preloader;
