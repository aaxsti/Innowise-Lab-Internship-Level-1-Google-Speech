import { GameStatistics } from '../../interfaces/game-statistics';
import { StatisticsActionsType, StatisticsActionTypes } from './statistics.action-types';

interface InitialState {
  statistics: Array<GameStatistics>
}

type ActionsType = StatisticsActionsType;

const initialState = {
  statistics: [],
} as InitialState;

const statisticsReducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case StatisticsActionTypes.FETCH_STATISTICS:
      return { ...state, statistics: action.payload };
    default:
      return state;
  }
};

export default statisticsReducer;
