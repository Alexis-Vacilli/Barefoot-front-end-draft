import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const intialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                    isAuthenticated: true,
            };
        case REGISTER_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuthenticated: null,
                    user: null,
                    token: null,
            };
        default:
            return state;
    }
}