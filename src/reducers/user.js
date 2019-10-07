const initialState = {
  isLoading: false,
  error: false,
  data: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FETCHING':
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case 'USER_FAIL':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case 'USER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload
      };
    default:
      return state;
  }
};

export default userReducer