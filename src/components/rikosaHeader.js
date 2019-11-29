import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';


const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  layoutHeader: {
    backgroundColor: 'BLACK',
    position: 'fixed',
    top: 0
  }
}

class rikosaHeader extends Component {

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render(){
  const { classes } = this.props;
  const sideList = (
    <div className={classes.list}>
      <List>
      <a href={'/rikosahome'}>
          <ListItem button>
            <ListItemText primary="りこさトップページ" />
          </ListItem>
        </a>
        <a href={'/playerform'}>
          <ListItem button>
            <ListItemText primary="プレ登録" />
          </ListItem>
        </a>
        <a href={'/managerform'}>
          <ListItem button>
            <ListItemText primary="マネ登録" />
          </ListItem>
        </a>
        <a href={'/rikosamembers'}>
          <ListItem button>
            <ListItemText primary="メンバー編集・削除" />
          </ListItem>
        </a>
        <a href={'/resultform'}>
          <ListItem button>
            <ListItemText primary="対戦成績登録" />
          </ListItem>
        </a>
        <a href={'/rikosaresults'}>
          <ListItem button>
            <ListItemText primary="対戦成績編集・削除" />
          </ListItem>
        </a>
        <a href={'/game'}>
          <ListItem button>
            <ListItemText primary="荷物決めゲーム" />
          </ListItem>
        </a>
      </List>
    </div>
  );
  return (
    <AppBar position="static"　className={classes.layoutHeader}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Typography variant="title" color="inherit" className={classes.grow}>
          <div style={{display: 'flex'}}>
            <div style={{width: '88%'}}>
              <p>Waseda University Science and engineering Soccer club</p>
              <p>OFFICIAL WEBSITE 管理者ページ</p>
            </div>
          </div>
        </Typography>
          <Button color="inherit" onClick={this.props.onClick}>{this.props.menu}</Button>
      </Toolbar>
    </AppBar>
  );
  }
}

rikosaHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(rikosaHeader);
