import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Beer from './Beer';
import { withStyles } from '@material-ui/core';

const styles = {
  progress: {
    display: 'block',
    margin: 'auto',
    padding: '30px'
  }
}

class BeerGrid extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadBeer: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    beers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    favorites: PropTypes.object.isRequired
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.loadBeer();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200) 
      && !this.props.isLoading
    ) {
      this.loadBeer();
    }
  }

  loadBeer() {
    this.props.loadBeer(this.props.page);
  }

  render() {
    const { beers, toggleFavorite, favorites, classes, isLoading } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={40}>
          {beers.map(beer => (
            <Grid item key={beer.id} xs={12} md={6} lg={4}>
              <Beer isFavorite={!!favorites[beer.id]} favoriteClick={toggleFavorite} {...beer} />
            </Grid>
          ))}
        </Grid>
        {isLoading && <CircularProgress size={70} className={classes.progress} />}
      </React.Fragment>
    );  
  }
}

export default withStyles(styles)(BeerGrid);