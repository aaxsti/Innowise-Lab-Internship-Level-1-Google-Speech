import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { CustomButtonProps } from '../../../../core/components/types/CustomButtonProps';

const ToggleAuthButton = styled(Button)<CustomButtonProps>`
  && {
    margin-top: 20px;
  }
`;

export default ToggleAuthButton;
