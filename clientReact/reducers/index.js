import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parcelReducer from './parcelReducer';

export default combineReducers({
  auth: authReducer,
  parcel: parcelReducer
});