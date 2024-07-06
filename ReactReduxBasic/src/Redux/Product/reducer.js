import {
  GET_PRODUCT_Fail,
  GET_PRODUCT_Request,
  GET_PRODUCT_Success,
} from "../actiontype";

let initialstate = {
  isLoading: false,
  isError: false,
  date: [],
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_Request:
      return { ...state, isLoading: payload };

    case GET_PRODUCT_Success:
      return { ...state, data: payload };
    case GET_PRODUCT_Fail:
      return { ...state, isError: payload };

    default:
      return state;
  }
};
