const initialState = {
  parcels: []
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PARCEL':
      return {
        ...state,
        parcels:action.payload
      };
    case 'ADD_PARCEL_FAIL':
      return {
        ...state,
        errorMessage: action.payload
      };
      case 'SIGNUP_USER':
      return {
        ...state,
        isAuthenticated: true, // check(action.payload)
        user:action.payload
      };
    case 'SIGNUP_USER_FAIL':
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}