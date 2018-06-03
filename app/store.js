import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './reducers/dummyReducer.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(thunkMiddleware, createLogger());

const store = createStore(dummyReducer, middleware);

export default store;
