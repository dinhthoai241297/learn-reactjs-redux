import { combineReducers } from 'redux';
import form from './form';
import tasks from './tasks';
import taskedit from './taskedit';
import filter from './filter';

const myReducer = combineReducers({
    form,
    tasks,
    taskedit,
    filter
});

export default myReducer;