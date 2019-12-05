
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
//import thunk from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
  );
  return store;
};

export default configureStore;
