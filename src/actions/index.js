import * as types from './../contanst/ActiveTypes';

export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}