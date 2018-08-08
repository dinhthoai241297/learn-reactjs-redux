import * as types from './../contanst/ActiveTypes';

var intiState = false;

const form = (state = intiState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM: {
            return !state;
        }
        default: {
            return state;
        }
    }
}

export default form;