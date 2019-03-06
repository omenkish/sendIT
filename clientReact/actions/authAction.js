import { sendHttpRequest } from '../services/utils';

export const postRequest = (userData, url, actionTypeObj, actionTypeFailObj) => async (dispatch) => {
  try {
    const response = await sendHttpRequest(url, 'post', userData);
    console.log(response.data);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', response.data);
    return dispatch({ ...actionTypeObj})
      
  } catch(error){
    return dispatch({ ...actionTypeFailObj, payload: error.response.data.message });
  }
}
