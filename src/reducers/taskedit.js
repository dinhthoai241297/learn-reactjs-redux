import * as types from '../contanst/ActiveTypes';

var intiState = null;

const taskedit = (state = intiState, action) => {
    switch (action.type) {
        case types.SET_EIDT_TASK: {
            state = action.task;
            return {...state};
        }
        case types.CLEAR_EDIT_TASK: {
            return null;
        }
        default: {
            return state;
        }
    }
}

export default taskedit;