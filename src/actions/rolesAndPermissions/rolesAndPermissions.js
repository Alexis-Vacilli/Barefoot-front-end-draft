import axios from 'axios';
import {GET_ROLES_SUCCESS, GET_ROLES_FAIL} from '../types'
import  { tokenConfig } from '../auth';
export const roles = (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // REQUEST BODY
    const body = JSON.stringify({});
    axios
      .get("https://elite-staging.herokuapp.com/api/v1/roles/", body, config)
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