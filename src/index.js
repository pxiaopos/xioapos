import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from 'containers/App';

import storageStore from 'core/redux/store';

render(
  <HashRouter>
    <Provider store={storageStore}>
      <App />
    </Provider>
  </HashRouter>
  , document.getElementById('root'));
