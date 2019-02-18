// action types

const LOAD_BEER_START = 'LOAD_BEER_START';
const LOAD_BEER_SUCCESS = 'LOAD_BEER_SUCCESS';
const LOAD_BEER_ERROR = 'LOAD_BEER_ERROR';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// reducer

const initialState = {
  beers: [],
  isLoading: false,
  page: 1,
  favorites: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BEER_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_BEER_SUCCESS:
      return {
        ...state,
        beers: [...state.beers, ...action.beers],
        isLoading: false,
        page: state.page + 1
      };
    case LOAD_BEER_ERROR:
      return {
        ...state,
        isLoading: false
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.beerId]: !state.favorites[action.beerId]
        }
      }
    default:
      return state;
  }
}

// actions

const loadBeerStart = () => ({
  type: LOAD_BEER_START
});

const loadBeerSuccess = beers => ({
  type: LOAD_BEER_SUCCESS,
  beers
});

const loadBeerError = err => ({
  type: LOAD_BEER_ERROR,
  err
});

export const loadBeer = page => dispatch => {
  dispatch(loadBeerStart);
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
    .then(response => response.json())
    .then(beers => dispatch(loadBeerSuccess(beers)))
    .catch(err => loadBeerError(err))
}

export const toggleFavorite = beerId => {
  return {
    type: TOGGLE_FAVORITE,
    beerId
  }
};