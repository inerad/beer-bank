import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

import './index.css';
import App from './app';
import reducers from './ducks';

/* Note: white text is not legible in orange palette */
const theme = createMuiTheme({
  palette: {
    primary: orange
  },
  typography: {
    useNextVariants: true,
  },
});

const store = createStore(reducers, applyMiddleware(thunk));

const app = <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
</Provider>

ReactDOM.render(app, document.getElementById('root'));