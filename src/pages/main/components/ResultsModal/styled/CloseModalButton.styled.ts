import styled from 'styled-components';
import MenuButton from '../../../../../core/components/styled/MenuButton.styled';
import Colors from '../../../../../core/constants/colors';

const CloseModalButton = styled(MenuButton)`
  width: 140px;
  
  && {
    color: ${Colors.primary};
    margin-left: 50px;
  }

`;

export default CloseModalButton;
