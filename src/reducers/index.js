import {combineReducers} from 'redux';
import auth from './auth';
import roles from './rolesAndPermissions/rolesAndPermissions';



export default combineReducers({auth, roles});