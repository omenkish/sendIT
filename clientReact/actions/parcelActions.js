import axios from 'axios';
import { baseUrl } from '../config';
import { sendHttpRequest } from '../services/utils';

import {
  ADD_PARCEL,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_PARCELS,
  GET_PARCEL,
  PARCEL_LOADING,
  DELETE_PARCEL
} from './types';

// function to dispatch parcel actions
export const parcelRequest = (url, httpType, actionTypeObj, actionTypeFailObj, userData) => async (dispatch) => {
  try {
    const response = await sendHttpRequest(url, httpType, userData);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', response.data);
    return dispatch({ ...actionTypeObj})
      
  } catch(error){
    return dispatch({ ...actionTypeFailObj, payload: error.response.data.message });
  }
}

// export const addParcel = parcelData => dispatch => {
//   axios
//     .post(`${baseUrl}/parcels`, parcelData, authHeader)
//     .then(res =>
//       dispatch({
//         type: ADD_PARCEL,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Get parcels
export const getParcels = () => dispatch => {
  //dispatch(setParcelLoading());
  axios
    .get('/api/parcels')
    .then(res =>
      dispatch({
        type: GET_PARCELS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PARCELS,
        payload: null
      })
    );
};

// Get PARCEL
export const getParcel = id => dispatch => {
  // dispatch(setPARCELLoading());
  axios
    .get(`/api/parcels/${id}`)
    .then(res =>
      dispatch({
        type: GET_PARCEL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PARCEL,
        payload: null
      })
    );
};

// Delete PARCEL
export const deleteParcel = id => dispatch => {
  axios
    .delete(`/api/parcels/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PARCEL,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getRequest = (url, actionTypeObj, actionTypeFailObj) => async (dispatch) => {
  try {
    const link = `${baseUrl}/${url}`;
    const {data} = await axios.get(link);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.data);
    return dispatch({ ...actionTypeObj})
      
  } catch(error){
    return dispatch({ ...actionTypeFailObj, payload: error.response.data.message });
  }
}
