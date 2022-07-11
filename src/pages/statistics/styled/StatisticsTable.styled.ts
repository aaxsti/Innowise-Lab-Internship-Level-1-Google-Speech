import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import StatisticsPageColors from './constants/colors';

const StatisticsTable = styled(DataGrid)`
  padding: 20px 30px;

  && {
    border-radius: 15px;
    background-color: ${StatisticsPageColors.background};
    font-weight: normal;
    font-size: 18px;
  }
`;

export default StatisticsTable;
