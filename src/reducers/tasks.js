import * as types from '../contanst/ActiveTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var save = (state) => {
    localStorage.setItem('tasks', JSON.stringify(state));
}

var findIndex = (arr, id) => {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
}

const tasks = (state = initState, action) => {
    switch (action.type) {
        case types.SAVE_TASK: {
            if (action.task.id) {
                var index = findIndex(state, action.task.id);
                if (index > -1) {
                    state[index].name = action.task.name;
                    state[index].status = action.task.status;
                }
            } else {
                action.task.id = (new Date()).getTime() + '';
                state.push(action.task);
            }
            save(state);
            return [...state];
        }
        case types.DELETE_TASK: {
            index = findIndex(state, action.id);
            if (index > -1) {
                state.splice(index, 1);
            }
            save(state);
            return [...state];
        }
        case types.UPDATE_SATUS: {
            index = findIndex(state, action.id);
            if (index > -1) {
                state[index].status = state[index].status === 2 ? 0 : state[index].status + 1;
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