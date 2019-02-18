import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    toolbar: {
      justifyContent: 'flex-end'
    }
}

class NavBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  homeClick() {
    window.location.reload();
  }

  favoritesClick() {
    console.log('Favorite button clicked');
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Button color="inherit" onClick={() => this.homeClick()}>Home</Button>
          <Button color="inherit">Favourite</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(NavBar);