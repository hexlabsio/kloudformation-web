import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const quantumComposeApp = combineReducers({
    router: routerReducer
});

export default quantumComposeApp;