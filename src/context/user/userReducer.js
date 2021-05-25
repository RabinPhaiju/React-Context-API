import { USER_FETCH, USER_SET_LOADING } from "../types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case USER_SET_LOADING:
      return {
        ...state,
        user_loading: true,
      };
    case USER_FETCH:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
