import styled from 'styled-components';
import { Modal } from '@material-ui/core';
import Colors from '../../../../../core/constants/colors';

export const ModalContent = styled.div`
  width: 400px;
`;

export const ModalContentBlock = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${Colors.primary};
`;

export const ModalWindow = styled(Modal)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
