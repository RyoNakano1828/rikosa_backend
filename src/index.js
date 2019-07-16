import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import * as reducers from './reducers';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

const history = createBrowserHistory();

//const store = configureStore();
export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(
    logger,
    thunk,
    routerMiddleware(history)
  )
);



const RikosaApp = () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Suspense>
  </Provider>
);


// DOMにメインコンポーネントを書き込む
const render = () => {
  ReactDOM.render(
    <RikosaApp store={store}/>,
  document.getElementById('root'))
}

store.subscribe(() => {
  render()
  console.log(store.getState().form)   // 動作確認のためコンソール出力
})
render();

/*
const render = () => {
  ReactDOM.render(
    <Players store={store} />,
    document.getElementById('root')
  )
}
*/
