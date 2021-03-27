import axios from 'axios';
import {GET_ROLES_SUCCESS, GET_ROLES_FAIL, CREATE_ROLE_SUCCESS, CREATE_ROLE_FAIL} from './types';
//import  { tokenConfig } from './auth';
import { token } from './auth';
// export const roles = (dispatch, getState) => {
//     axios
//       .get("https://elite-staging.herokuapp.com/api/v1/roles/", tokenConfig(getState))
//       .then((res) => {
//         alert(JSON.stringify(res.data));
//         dispatch({
//           type: GET_ROLES_SUCCESS,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         alert(err.message);
//         dispatch({
//           type: GET_ROLES_FAIL,
//           payload: err.message
//         });
//       });
//   };
  export const roles = () => async (dispatch) => {
    const authHeader = `${token}`;
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://elite-staging.herokuapp.com/api/v1/roles/',
        headers: {
          Authorization: authHeader
        }
      });
      let data = res.data;
      dispatch({
        type: GET_ROLES_SUCCESS,
        payload: data
      });
      console.log('******************************************************', data)

    } catch (error) {
      alert(error.message)
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', authHeader)
      console.log('########################################################', error)
      dispatch({
        type: GET_ROLES_FAIL,
        payload: error.res
      });
    }
  };   

  export const createRole = (name) => async (dispatch) => {
    const authHeader = `${token}`;
    try {
      const body = JSON.stringify(name);
      alert('Here is body', body)
      console.log('BoooooooDDDDYYY', body);
      const res = await axios({
        method: 'POST',
        url: 'https://elite-staging.herokuapp.com/api/v1/roles/save',
        body,
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader
        }
      });
      let data = res.data;
      dispatch({
        type: CREATE_ROLE_SUCCESS,
        payload: data
      });
      console.log('******************************************************', data)

    } catch (error) {
      alert(error.message)
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', authHeader)
      console.log('########################################################', error)
      dispatch({
        type: CREATE_ROLE_FAIL,
        payload: error.res
      });
    }
  };   
  