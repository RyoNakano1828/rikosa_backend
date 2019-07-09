import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
//import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Home from './views/route/home'
import Member from './views/route/member'
import Player from './views/route/player'
import Manager from './views/route/manager'
import Result from './views/route/result'
import Schedule from './views/route/schedule'
import Photo from './views/route/photo'
import Link from './views/route/link'
import Login from './views/route/login'
import RikosaHome from './views/route/rikosaHome'
import RikosaMember from './views/route/rikosaMember'
import PlayerForm from './views/route/playerForm'
import ManagerForm from './views/route/managerForm'
import ResultForm from './views/route/resultForm'
import ScheduleForm from './views/route/scheduleForm'
import PhotoAdd from './views/route/photoAdd'

const store = configureStore();

class HomeApp extends React.Component {
  render() {
    return (
      <Home store={store} />
      )
  }
}
class MemberApp extends React.Component {
  render() {
    return (
      <Member store={store} />
      )
  }
}class PlayerApp extends React.Component {
  render() {
    return (
      <Player store={store} />
      )
  }
}class ManagerApp extends React.Component {
  render() {
    return (
      <Manager store={store} />
      )
  }
}class ResultApp extends React.Component {
  render() {
    return (
      <Result store={store} />
      )
  }
}class ScheduleApp extends React.Component {
  render() {
    return (
      <Schedule store={store} />
      )
  }
}class PhotoApp extends React.Component {
  render() {
    return (
      <Photo store={store} />
      )
  }
}class LinkApp extends React.Component {
  render() {
    return (
      <Link store={store} />
      )
  }
}
class LoginApp extends React.Component {
  render() {
    return (
      <Login store={store} />
      )
  }
}
class RikosaHomeApp extends React.Component {
  render() {
    return (
      <RikosaHome store={store} />
      )
  }
}
class RikosaMemberApp extends React.Component {
  render() {
    return (
      <RikosaMember store={store} />
      )
  }
}class PlayerFormApp extends React.Component {
  render() {
    return (
      <PlayerForm store={store} />
      )
  }
}class ManagerFormApp extends React.Component {
  render() {
    return (
      <ManagerForm store={store} />
      )
  }
}class ResultFormApp extends React.Component {
  render() {
    return (
      <ResultForm store={store} />
      )
  }
}class ScheduleFormApp extends React.Component {
  render() {
    return (
      <ScheduleForm store={store} />
      )
  }
}class PhotoAddApp extends React.Component {
  render() {
    return (
      <PhotoAdd store={store} />
      )
  }
}

const RikosaApp = () => (
  //<Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <Switch>
            <Route path='/members' component={MemberApp} />
            <Route path='/player' component={PlayerApp} />
            <Route path='/maneger' component={ManagerApp} />
            <Route path='/result' component={ResultApp}/>
            <Route path='/schedule' component={ScheduleApp}/>
            <Route path='/photo' component={PhotoApp}/>
            <Route path='/link' component={LinkApp}/>
            <Route path='/login' component={Login}/>
            <Route path='/rikosa' component={RikosaHomeApp}/>
            <Route path='/rikosamembers' component={RikosaMemberApp}/>
            <Route path='/playerform' component={PlayerFormApp} />
            <Route path='/manegerform' component={ManagerFormApp} />
            <Route path='/resultform' component={ResultFormApp}/>
            <Route path='/scheduleform' component={ScheduleFormApp}/>
            <Route path='/photoadd' component={PhotoAddApp}/>
            <Route component={HomeApp} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  //</Provider>
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
