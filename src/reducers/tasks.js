import * as types from '../contanst/ActiveTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var save = (state) => {
    localStorage.setItem('tasks', JSON.stringify(state));
}

const tasks = (state = initState, active) => {
    switch (active.type) {
        case types.SAVE_TASK: {
            if (active.task.id) {
                console.log('have', active.task.id);
            } else {
                active.task.id = (new Date()).getTime() + '';
                state.push(active.task);
            }
            save(state);
            return [...state];
        }
        default: {
            return [...state];
        }
    }
}

export default tasks;