import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: `${theme.spacing.unit * 5}px`
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.20),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '400px'
    },
  },
  searchRoot: {
    width: '100%'
  },
  searchInput: {
    padding: theme.spacing.unit
  }
});

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <Typography variant="h2" gutterBottom align="center">
          The Beer Bank
        </Typography>
        <Typography variant="h6" paragraph align="center">
          Find your favourite beer here
        </Typography>
        <div className={classes.search}>
          <InputBase placeholder="Search for beer name" 
            classes={{
              root: classes.searchRoot,
              input: classes.searchInput
            }}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);