import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

//ログイン前コンポーネント
import Home from './components/home'
import MemberList from './containers/memberList'
import Schedule from './components/schedule' 
import Result from './containers/result'
import Link from './components/link'
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

//import ManagerForm from './containers/managerForm';


//随時移行していく
//import Member from './views/route/member'
//import Player from './views/route/player'
//import Manager from './views/route/manager'
//import Result from './views/route/result'
//import Schedule from './views/route/schedule'
//import Photo from './views/route/photo'
//import Link from './views/route/link'
//import Login from './views/route/login'

//import RikosaMember from './views/route/rikosaMember'
//import PlayerForm from './views/route/playerForm'
//import ManagerForm from './views/route/managerForm'
//import ResultForm from './views/route/resultForm'
//import ScheduleForm from './views/route/scheduleForm'
//import PhotoAdd from './views/route/photoAdd'


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
        <Router>
        <div className={classes.root}>
        <Switch>
            <Route path='/members' component={MemberList} />
            <Route path='/result' component={Result}/>
            <Route path='/schedule' component={Schedule}/>
            <Route path='/link' component={Link}/>
            <Route path='/photo' component={Photo}/>
            <Route path="/login" exact={true} component={Login}/>
            <PrivateRoute path='/rikosahome' component={RikosaHome}/>
            <PrivateRoute path='/rikosamembers' component={RikosaMember}/>
            <PrivateRoute path='/playerform' component={PlayerForm}/>
            <PrivateRoute path='/managerform' component={ManagerForm}/>
            <PrivateRoute path='/resultform' component={ResultForm}/>
            <Route component={Home}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
