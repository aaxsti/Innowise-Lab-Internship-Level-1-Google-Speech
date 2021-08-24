import styled from 'styled-components';
import LargeButton from '../../../core/components/styled/LargeButton.styled';

const ChangeLangButton = styled(LargeButton)<{onClick: () => void}>`
  && {
    height: 50px;
    width: 50px;
    margin-top: 30px;
  }
`;

export default ChangeLangButton;
