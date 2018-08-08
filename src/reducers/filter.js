import * as types from '../contanst/ActiveTypes';

var initState = {
    keyword: '',
    sortBy: 'name',
    sortValue: 1,
    status: -1
}

const filter = (state = initState, action) => {
    switch (action.type) {
        case types.SEARCH: {
            state.keyword = action.keyword;
            return {...state};
        }
        case types.SORT: {
            state.sortBy = action.sort.sortBy;
            state.sortValue = action.sort.sortValue;
            return {...state};
        }
        case types.STATUS: {
            state.status = action.value;
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}

export default filter;