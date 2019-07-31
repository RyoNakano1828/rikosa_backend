
import logo from '../logo.jpg'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    width: '50%',
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

class RikosaHome extends Component {
  componentWillMount() {
    this.props.onMount();
  }
  render() {
    const { classes, me } = this.props;
    return (
      <div>
        <Header menu="ログアウト" onClick={this.props.logout}/>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            <strong>{me.nickname}</strong>の皆さん、ようこそ！
          </Typography>
        </Paper>
        <div>
          <h1>りこさ用登録ページ</h1>
          <img src={logo} alt="Logo" />
          <div><br /><a href={'/playerform'}>→プレーヤー新規登録</a></div>
          <div><br /><a href={'/managerform'}>→マネージャー新規登録</a></div>
          <div><br /><a href={'/rikosamembers'}>→メンバー編集</a></div>
          <div><br /><a href={'/resultform'}>→対戦成績登録🔥</a></div>
          <div><br /><a href={'/photoadd'}>→写真追加</a></div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(RikosaHome);
