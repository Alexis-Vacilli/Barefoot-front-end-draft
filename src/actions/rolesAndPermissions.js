import axios from 'axios';
import {GET_ROLES_SUCCESS, GET_ROLES_FAIL} from './types'
import  { tokenConfig } from './auth';
export const roles = (dispatch, getState) => {
    axios
      .get("https://elite-staging.herokuapp.com/api/v1/roles/", tokenConfig(getState))
      .then((res) => {
        alert(JSON.stringify(res.data));
        dispatch({
          type: GET_ROLES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        dispatch({
          type: GET_ROLES_FAIL,
          payload: err.message
        });
      });
  };