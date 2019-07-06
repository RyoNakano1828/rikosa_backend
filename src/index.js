import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';

import Players from './views/players'
import Managers from './views/managers'
import Login from './views/login'
import Home from './views/home'
import History from './views/history'


//一旦これつかう
import rootReducer from './reducers/index'
import { createStore } from 'redux'
const store = createStore(rootReducer)


//const store = configureStore(rootReducer);

class Player extends React.Component {
  render() {
    return (
      <Players store={store} />
      )
  }
}

class Manager extends React.Component {
  render() {
    return (
      <Managers store={store} />
      )
  }
}

const RikosaApp = () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <Switch>
            <Route path='/players' component={Player} />
            <Route path='/manegers' component={Manager} />
            <Route path='/login' component={Manager}/>
            <Route path='/history' component={History}/>
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  </Provider>
);


// DOMにメインコンポーネントを書き込む
ReactDOM.render(
  <RikosaApp store={store} />,
  document.getElementById('root'))


/*

const render = () => {
  ReactDOM.render(
    <Players store={store} />,
    document.getElementById('root')
  )
}

//これもいったん使う
store.subscribe(() => {
  render()
  console.log(store.getState().form)   // 動作確認のためコンソール出力
})
render()

*/