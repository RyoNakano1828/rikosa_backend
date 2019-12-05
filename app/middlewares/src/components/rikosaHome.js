
import logo from '../logo.jpg'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RikosaHeader from './rikosaHeader';

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
        <RikosaHeader menu="ログアウト" onClick={this.props.logout}/>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            <strong>{me.nickname}</strong>の皆さん、ようこそ！
          </Typography>
        </Paper>
        <div style={{width: '100%'}}>
          <div className='buttons'>
            <a href={'/playerform'} className='button buttonx'><span>👦プレーヤー新規登録</span></a>
            <a href={'/managerform'} className='button buttonx'><span>👧マネージャー新規登録</span></a>
            <a href={'/rikosamembers'} className='button buttonx'><span>👦メンバー編集・削除👧</span></a>
            <a href={'/resultform'} className='button buttonx'><span>⚽試合結果登録</span></a>
            <a href={'/rikosaresults'} className='button buttonx'><span>⚽試合結果削除</span></a>
            <a href={'/game'} className='loginButton button'><span>⚽荷物決めゲーム🧴</span></a>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(RikosaHome);
