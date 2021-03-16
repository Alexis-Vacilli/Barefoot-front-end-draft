import axios from 'axios';
import  { REGISTER_SUCCESS, REGISTER_FAIL} from './types';
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