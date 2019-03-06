import {
  ADD_PARCEL,
  GET_PARCELS,
  GET_PARCEL,
  DELETE_PARCEL,
  PARCEL_LOADING
} from '../actions/types';

const initialState = {
  parcels: [],
  parcel: {},
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PARCEL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PARCELS:
      return {
        ...state,
        parcels: action.payload,
        loading: false
      };
    case GET_PARCEL:
      return {
        ...state,
        parcel: action.payload,
        loading: false
      };
    case ADD_PARCEL:
      return {
        ...state,
        parcels: [action.payload, ...state.parcels]
      };
    case DELETE_PARCEL:
      return {
        ...state,
        parcels: state.parcels.filter(parcel => parcel._id !== action.payload)
      };
    default:
      return state;
  }
}