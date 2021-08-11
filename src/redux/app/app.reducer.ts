import { HIDE_LOADER, SHOW_LOADER } from './app.types';

const initialState = {
  isLoading: false,
};
export default function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
