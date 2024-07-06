import axios from "axios";
import { GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actiontype";

export const fetchdata = (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST, payload: true });
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PRODUCT_REQUEST, payload: false });
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_PRODUCT_REQUEST, payload: false });
      dispatch({ type: GET_PRODUCT_FAIL, payload: true });
    });
};
