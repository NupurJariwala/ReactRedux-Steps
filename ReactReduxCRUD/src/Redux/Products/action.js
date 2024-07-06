import axios from "axios";
import {
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_FAIL,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "../actiontype";

export const postDatafun = (data) => (dispatch) => {
  dispatch({ type: POST_DATA_REQUEST, payload: true });
  axios
    .post("http://localhost:8080/product", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_DATA_REQUEST, payload: false });
      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_DATA_REQUEST, payload: false });
      dispatch({ type: POST_DATA_FAIL, payload: true });
    });
};

//
export const getdataFromServer = (paramobj) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST, payload: true });
  axios
    .get("http://localhost:8080/product", paramobj)
    .then((res) => {
      console.log(res);
      // console.log(res.headers["x-total-count"]);
      dispatch({ type: GET_DATA_REQUEST, payload: false });
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: { data: res.data, page: res.headers["x-total-count"] },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_DATA_REQUEST, payload: false });
      dispatch({ type: GET_DATA_FAIL, payload: true });
    });
};
