import {
    GET_ROLES_SUCCESS,
    GET_ROLES_FAIL,
    CREATE_ROLE_SUCCESS,
    CREATE_ROLE_FAIL
} from '../../actions/types';


const intialState = {
    roles: [],
    newRole: ''
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
        case CREATE_ROLE_SUCCESS:
            return {
                ...state
                // newRole: 
            };
        case CREATE_ROLE_FAIL:
            return {
                ...state
            }
        
        default:
            return state;
    }
}