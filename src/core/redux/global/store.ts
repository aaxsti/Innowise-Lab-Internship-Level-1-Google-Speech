import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { StrictEffect } from 'redux-saga/effects';
import authReducer from '../auth/auth.reducer';
import appReducer from '../app/app.reducer';
import wordsReducer from '../words/words.reducer';
import statisticsReducer from '../statistics/statistics.reducer';
import authSagasWatcher from '../auth/sagas/sagasCombiner';
import wordsSagasWatcher from '../words/sagas/sagasCombiner';
import statisticsSagasWatcher from '../statistics/sagas/sagasCombiner';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  words: wordsReducer,
  statistics: statisticsReducer,
});

export const saga = createSagaMiddleware();

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>

export type SagaWithoutAction = Generator<StrictEffect, void>
export type SagaWithAction<A> = Generator<StrictEffect, void, A>
export type SagaWithServerResponse<A> = Generator<StrictEffect, void, A>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(authSagasWatcher);
saga.run(wordsSagasWatcher);
saga.run(statisticsSagasWatcher);

export default store;
