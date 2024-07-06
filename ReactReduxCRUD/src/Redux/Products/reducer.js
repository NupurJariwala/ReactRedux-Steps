import {
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_FAIL,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "../actiontype";

const initialstate = {
  isLoading: false,
  isError: false,
  data: [],
  totalpage: 1,
};
// eslint-disable-next-line no-unused-vars
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case POST_DATA_REQUEST:
      return { ...state, isLoading: payload };

    case POST_DATA_SUCCESS:
      return { ...state };

    case POST_DATA_FAIL:
      return { ...state, isError: payload };

    //GET
    case GET_DATA_REQUEST: {
      return { ...state, isLoading: payload };
    }
    case GET_DATA_SUCCESS: {
      return { ...state, data: payload.data, totalpage: payload.page };
    }
    case GET_DATA_FAIL: {
      return { ...state, isError: payload };
    }
    default:
      return state;
  }
};
