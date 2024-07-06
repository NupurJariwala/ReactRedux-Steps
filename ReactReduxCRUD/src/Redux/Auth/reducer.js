import { AUTH_DATA_SUCCESS } from "../actiontype";
import { AUTH_DATA_REQUEST } from "../actiontype";
import { AUTH_DATA_FAIL } from "../actiontype";
const initialstate = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
};

// eslint-disable-next-line no-unused-vars
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case AUTH_DATA_REQUEST:
      return { ...state, isLoading: payload };

    case AUTH_DATA_SUCCESS:
      return { ...state, token: payload, isAuth: true };

    case AUTH_DATA_FAIL:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
