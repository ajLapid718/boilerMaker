import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { boilerContainer } from './containers/boilerContainer.js';

ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world!</div>
    <boilerContainer />
  </Provider>,
  document.getElementById('app')
);
