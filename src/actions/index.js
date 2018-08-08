import * as types from './../contanst/ActiveTypes';

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}

export const setEditTask = (task) => {
    return {
        type: types.SET_EIDT_TASK,
        task
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const clearEditTask = () => {
    return {
        type: types.CLEAR_EDIT_TASK
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_SATUS,
        id
    }
}

export const search = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}

export const status = (value) => {
    return {
        type: types.STATUS,
        value
    }
}