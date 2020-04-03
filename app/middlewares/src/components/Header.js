import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import emblem from '../images/emblem.jpg';
import '../App.scss';


const styles = {
  grow: {
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    // borderRadius: '50%',
    // border: 'solid'
  },
  layoutHeader: {
    backgroundColor: '#990033',
    position: 'fixed',
    top: 0,
  }
}

class header extends Component {

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
      <a href={'/home'}>
          <ListItem button>
            <ListItemText primary="トップページ" />
          </ListItem>
        </a>
        <a href={'/members'}>
          <ListItem button>
            <ListItemText primary="メンバー紹介" />
          </ListItem>
        </a>
        <a href={'/result'}>
          <ListItem button>
            <ListItemText primary="試合結果" />
          </ListItem>
        </a>
        <a href={'/event'}>
          <ListItem button>
            <ListItemText primary="活動紹介" />
          </ListItem>
        </a>
        <a href={'/photo'}>
          <ListItem button>
            <ListItemText primary="フォトギャラリー" />
          </ListItem>
        </a>
        <a href={'/login'}>
          <ListItem button>
            <ListItemText primary="りこさの人はこちらから" />
          </ListItem>
        </a>
      </List>
    </div>
  );
  return (
    <AppBar position="static"　className={classes.layoutHeader} style={{width: '100%'}}>
      <Toolbar style={{paddingLeft: 0, paddingRight: 0}}>
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
        <Typography className='header' variant="title" color="inherit">
          <div style={{display: 'flex', height:'100%'}}>
            <div style={{width: '90%', justifyContent:'center', verticalAlign: 'middle'}}>
              <h1 className='hedaerFont'>Waseda university Science＆Engineering Soccer club</h1>
              <p className='hedaerFont'>OFFICIAL WEBSITE</p>
            </div>
            <div style={{ height: '100%', marginLeft:'auto'}}>
              <img src={emblem} alt="Emblem" style={{height: '100%', margin: 'auto'}}/>  
            </div>
          </div>
        </Typography>
          {/* <Button color="inherit" onClick={this.props.onClick}>{this.props.menu}</Button> */}
      </Toolbar>
    </AppBar>
  );
  }
}

header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(header);
