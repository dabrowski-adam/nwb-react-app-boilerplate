import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import * as appReducers from './app.js';

export default combineReducers({
    routing: routerReducer,
    ...appReducers
});
