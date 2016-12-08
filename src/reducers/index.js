import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appIsFlipped } from './app.js';

export default combineReducers({
    appIsFlipped,
    routing: routerReducer
});
