import styled from 'styled-components';
import MenuButton from '../../../core/components/styled/MenuButton.styled';
import StatisticsPageColors from './constants/colors';

enum ExitStatisticsButtonColors {
  hover = '#e2e2e2'
}

const ExitStatisticsButton = styled(MenuButton)`
  width: 300px;
  
  && {
    background-color: ${StatisticsPageColors.background};
    border: none;
  }
  
  &&:hover {
    background-color: ${ExitStatisticsButtonColors.hover};
  }
`;

export default ExitStatisticsButton;
