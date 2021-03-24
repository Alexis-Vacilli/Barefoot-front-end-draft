import {
    GET_ROLES_SUCCESS,
    GET_ROLES_FAIL
} from '../../actions/types';


const intialState = {
    roles: [],
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intialState, action) {
    switch (action.type) {
        case GET_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.payload.data
            };
        case GET_ROLES_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}