import './index.scss'

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './lib/configureStore';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                
            </Route>
        </Router>
    </Provider>, 
    document.querySelector('#app')
);
