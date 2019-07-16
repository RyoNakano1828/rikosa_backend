import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
}

function header(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
          React + ReduxでJWT認証を導入しよう！
        </Typography>
          <Button color="inherit" onClick={props.onClick}>{props.menu}</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(header);
