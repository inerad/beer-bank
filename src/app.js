import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';

import NavBar from './components/NavBar';
import Header from './components/Header';
import BeerGridContainer from './components/BeerGridContainer';

const styles = theme => {
  return {
    content: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      padding: `${theme.spacing.unit * 5}px`,
      [theme.breakpoints.up(900 + theme.spacing.unit * 6)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    }
  }
};

export class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <div className={classes.content}>
          <BeerGridContainer />
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App);
