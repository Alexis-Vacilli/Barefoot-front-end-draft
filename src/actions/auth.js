import axios from 'axios';
import  { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL} from './types';
// REGISTER USER
export const register = ({ firstName, lastName, email, password }) => (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // REQUEST BODY
    const body = JSON.stringify({firstName, lastName, email, password});
    axios
      .post("https://elite-staging.herokuapp.com/api/v1/users/signup", body, config)
      .then((res) => {
        alert(JSON.stringify(res.data));
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        dispatch({
          type: REGISTER_FAIL,
          payload: err.message
        });
      });
  };

  export const login = ({email, password }) => (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // REQUEST BODY
    const body = JSON.stringify({email, password});
    axios
      .post("https://elite-staging.herokuapp.com/api/v1/users/signin", body, config)
      .then((res) => {
        alert(JSON.stringify(res.data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.message
        });
      });
  };

  export const resetPassword = ({email }) => (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // REQUEST BODY
    const body = JSON.stringify({email});
    alert(body);
    axios
      .post("https://elite-staging.herokuapp.com/api/v1/users/forgotPassword", body, config)
      .then((res) => {
        alert(JSON.stringify(res.data));
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        dispatch({
          type: RESET_PASSWORD_FAIL,
          payload: err.message
        });
      });
  };

//Setup config with token   - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
