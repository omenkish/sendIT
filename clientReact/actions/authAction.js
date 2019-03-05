import axios from 'axios';
import { baseUrl } from '../config';

export const postRequest = (userData, url, actionTypeObj, actionTypeFailObj) => async (dispatch) => {
  try {
    const link = `${baseUrl}/${url}`;
    const {data} = await axios.post(link, userData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.data);
    return dispatch({ ...actionTypeObj})
      
  } catch(error){
    return dispatch({ ...actionTypeFailObj, payload: error.response.data.message });
  }
}

