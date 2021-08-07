import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import { authReducer } from "./auth/auth.reducer";
import {appReducer} from "./app/app.reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
    // main: mainReducer
    // statistic: statisticReducer ???
})

export const saga = createSagaMiddleware();

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))

export default store;
