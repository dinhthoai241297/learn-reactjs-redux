import * as types from './../contanst/ActiveTypes';

var intiState = false;

const form = (state = intiState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM: {
            return !state;
        }
        case types.OPEN_FORM: {
            return true;
        }
        case types.CLOSE_FORM: {
            return false;
        }
        default: {
            return state;
        }
    }
}

export default form;