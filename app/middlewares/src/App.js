import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.scss'
//ログイン前コンポーネント
import Home from './components/home'
import MemberList from './containers/memberList'
import Event from './components/event'
import Result from './containers/result'
import Photo from './components/photo'

//ログイン用コンポーネント
import { withStyles } from '@material-ui/core/styles'
import { PrivateRoute } from './components/PrivateRoute'
import Login from './containers/login'
//import Dashboard from './containers/Dashboard';

//ログイン後コンポーネント
import RikosaHome from './containers/RikosaHome'
import PlayerForm from './containers/playerForm'
import ManagerForm from './containers/managerForm'
import ResultForm from './containers/resultForm'
import RikosaMember from './containers/rikosaMemberList'
import RikosaResult from './containers/rikosaResult'
import RikosaPhoto from './components/rikosaPhoto'

import ReactGA from 'react-ga';

const styles = {
  root: {
    flexGrow: 1,
  },
}


class App extends Component {
  componentDidMount() {
    const { pathname } = '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Router>
        <div>
          <Switch>
            <Route path='/members' component={MemberList} />
            <Route path='/result' component={Result}/>
            <Route path='/event' component={Event}/>
            <Route path='/photo' component={Photo}/>
            <Route path="/login" exact={true} component={Login}/>
            <PrivateRoute path='/rikosahome' component={RikosaHome}/>
            <PrivateRoute path='/rikosamembers' component={RikosaMember}/>
            <PrivateRoute path='/playerform' component={PlayerForm}/>
            <PrivateRoute path='/managerform' component={ManagerForm}/>
            <PrivateRoute path='/resultform' component={ResultForm}/>
            <PrivateRoute path='/rikosaresults' component={RikosaResult}/>
            <PrivateRoute path='/rikosaphoto' component={RikosaPhoto}/>
            <Route component={Home}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }

  
}

export default withStyles(styles)(App);
