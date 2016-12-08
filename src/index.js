//import './index.scss'

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './lib/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import Front from './components/Front';
import Back from './components/Back';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={{side: Front}}/>
                <Route path="front" component={{side: Front}}/>
                <Route path="back" component={{side: Back}}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app')
);
