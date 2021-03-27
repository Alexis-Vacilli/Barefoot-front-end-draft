import axios from 'axios';
import  { BOOKING_SUCCESS, BOOKING_FAIL } from './types';
// BOOKING ACCOMODATION
export const register = ({ checkinDate, checkoutDate, UserId, AccomodationId }) => (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // REQUEST BODY
    const body = JSON.stringify({checkinDate, checkoutDate, UserId, AccomodationId});
    axios
      .get("https://elite-staging.herokuapp.com/api/v1//booking/bookedAccomodations", body, config)
      .then((res) => {
        alert(JSON.stringify(res.data));
        dispatch({
          type: BOOKING_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        dispatch({
          type: BOOKING_FAIL,
          payload: err.message
        });
      });
  };
  export const token = localStorage.getItem('token');