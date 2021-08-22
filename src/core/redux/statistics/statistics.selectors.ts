import { createSelector } from 'reselect';
import { AppState } from '../global/store';

const statistics = (state: AppState) => state.statistics;

const selectStatistics = createSelector(
  [statistics],
  (stats) => stats?.statistics,
);

export default selectStatistics;
