import styled from 'styled-components';
import Title from '../../../core/components/styled/Title.styled';
import StatisticsPageColors from './constants/colors';

const StatisticsTitle = styled(Title)`
  background-color: ${StatisticsPageColors.background};
  padding: 15px;
  border-radius: 15px;
`;

export default StatisticsTitle;
