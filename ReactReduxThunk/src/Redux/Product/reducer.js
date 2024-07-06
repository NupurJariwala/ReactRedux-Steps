import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../actiontype";

let initialstate = {
  isLoading: false,
  isError: false,
  data: [],
};

// eslint-disable-next-line no-unused-vars
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: payload };

    case GET_PRODUCT_SUCCESS:
      return { ...state, data: payload };

    case GET_PRODUCT_FAIL:
      return { ...state, isError: payload };

    default:
      return state;
  }
};
