const initialState = {
  user: {}
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user:action.payload
      };
    case 'LOGIN_USER_FAIL':
      return {
        ...state,
        errorMessage: action.payload
      };
      case 'SIGNUP_USER':
      return {
        ...state,
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