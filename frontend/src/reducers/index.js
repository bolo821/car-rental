import { combineReducers } from 'redux';
import search from './search';
import log from './log';

export default combineReducers({
    search: search,
    log: log,
});