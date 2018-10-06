import React from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Provider } from 'mobx-react';

import Routes from './Routes';

import './styles.css'

const browserHistory = createBrowserHistory();
const RoutingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, RoutingStore);

const App = () => {
  return (
    <Provider RoutingStore={RoutingStore}>
      <div className='background'>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </Provider>
  )
}

export default App;
