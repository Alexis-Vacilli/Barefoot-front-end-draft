import { token } from '../actions/auth';
import axios from 'axios';
import {GET_ROLES_SUCCESS, GET_ROLES_FAIL, CREATE_ROLE_SUCCESS, CREATE_ROLE_FAIL} from './types';

export const BookedAccommodations = () => async (dispatch) => {
    const authHeader = `${token}`;
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://elite-staging.herokuapp.com/api/v1/booking/availableAccomodations',
        headers: {
          Authorization: authHeader
        }
      });
      let data = res.data;
      dispatch({
        type: GET_ROLES_SUCCESS,
        payload: data
      });

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