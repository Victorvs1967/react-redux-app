import * as types from '../actions/types';

const initialState = {
    _ytSearchState: []
}

const YTReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case types.FETCH_YTSEARCH:
            newState = { ...state, _ytSearchState: action.payload };
            break;
        default:
            newState = state;
    }
    return newState;
}

export default YTReducer;