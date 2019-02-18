import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BeerGrid from './BeerGrid';

import * as beerActions from '../ducks/beer';

const mapStateToProps = (state) => ({
  beers: state.beer.beers,
  isLoading: state.beer.isLoading,
  page: state.beer.page,
  favorites: state.beer.favorites
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(beerActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerGrid);
