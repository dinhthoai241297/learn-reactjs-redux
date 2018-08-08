import { combineReducers } from 'redux';
import form from './form';
import tasks from './tasks';

const myReducer = combineReducers({
    form,
    tasks
});

export default myReducer;