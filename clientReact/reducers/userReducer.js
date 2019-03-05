const initialState = {
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
      };
    case 'LOGIN_USER_FAIL':
      return {
        ...state,
        errorMessage: action.payload
      };
      case 'SIGNUP_USER':
      return {
        ...state,
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