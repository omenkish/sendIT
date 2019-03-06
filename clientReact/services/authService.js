import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { history } from '../store/store';

export const getCurrentUserToken = () => {
  return localStorage.getItem('token');
}
export const isLoggedIn = () => {
  const token = getCurrentUserToken();
  let isLoggedIn = false;
  if(token) {
    const decoded = jwtDecode(token);
    isLoggedIn = decoded && decoded.exp && (decoded.exp > (Date.now() / 1000));
  }
  return isLoggedIn;
}

export const decodeToken = () => {
  let decodedToken;
  const token = getCurrentUserToken();
  if(localStorage.hasOwnProperty('token') && isLoggedIn()){
    decodedToken = jwtDecode(token);
  }
  return decodedToken;
}  
export const logout = () => {
  if (localStorage.hasOwnProperty('token')){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthToken(false);
  }
  history.push('/login');
}

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const setHeader = () => {
  const token = getCurrentUserToken();
  if (token){
    return {headers : {'Authorization': `Bearer ${token}`} }
  }
}
