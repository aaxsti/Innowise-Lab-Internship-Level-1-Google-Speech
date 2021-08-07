import { createSelector } from 'reselect'
import {AppState} from "../store";

const app = (state: AppState) => state.app

export const selectLoading = createSelector(
    [app],
    app => app.isLoading
)