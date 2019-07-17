import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


import { withStyles } from '@material-ui/core/styles';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import MemberList from './containers/memberList';

import Home from './views/route/home'
import Member from './views/route/member'
import Player from './views/route/player'
import Manager from './views/route/manager'
import Result from './views/route/result'
import Schedule from './views/route/schedule'
import Photo from './views/route/photo'
import Link from './views/route/link'
//import Login from './views/route/login'
import RikosaHome from './views/route/rikosaHome'
import RikosaMember from './views/route/rikosaMember'
import PlayerForm from './views/route/playerForm'
import ManagerForm from './views/route/managerForm'
import ResultForm from './views/route/resultForm'
import ScheduleForm from './views/route/scheduleForm'
import PhotoAdd from './views/route/photoAdd'
/*
import * as store from './index'

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
*/

const styles = {
  root: {
    flexGrow: 1,
  },
}


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/*<PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>*/}
        <Router>
        <div className={classes.root}>
        <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route path='/members' component={MemberList} />
            <Route path='/result' component={Result}/>
            <Route path='/schedule' component={Schedule}/>
            <Route path='/photo' component={Photo}/>
            <Route path='/link' component={Link}/>
            <Route path="/login" exact={true} component={Login}/>
            <PrivateRoute path='/rikosahome' component={RikosaHome}/>
            <PrivateRoute path='/rikosamembers' component={RikosaMember}/>
            <PrivateRoute path='/playerform' component={PlayerForm}/>
            <PrivateRoute path='/manegerform' component={ManagerForm}/>
            <PrivateRoute path='/resultform' component={ResultForm}/>
            <PrivateRoute path='/photoadd' component={PhotoAdd}/>
            <Route component={Home}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
