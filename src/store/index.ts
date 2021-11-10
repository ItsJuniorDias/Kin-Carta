import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware  from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { IContactState } from './modules/contact/types';


export interface IState {
  contact: IContactState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;
