import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL
} from '../actions/types';

const intialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case RESET_PASSWORD_SUCCESS:
        case CHANGE_PASSWORD_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.data.token);
            return {
                ...state,
                ...action.payload,
                    isAuthenticated: true,
            };
        case LOGIN_FAIL:
        case RESET_PASSWORD_FAIL:
        case CHANGE_PASSWORD_FAIL:
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