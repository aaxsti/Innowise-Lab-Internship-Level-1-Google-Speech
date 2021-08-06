import { createSelector } from 'reselect'
import {AppState} from "../store";

const user = (state: AppState) => state.auth

export const selectUser = createSelector(
    [user],
    user => user.user
)