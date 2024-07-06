import axios from "axios";
import {
  AUTH_DATA_FAIL,
  AUTH_DATA_REQUEST,
  AUTH_DATA_SUCCESS,
} from "../actiontype";

export const postuserdata = (userdata) => (dispatch) => {
  dispatch({ type: AUTH_DATA_REQUEST, payload: true });
 return axios
    .post("https://reqres.in/api/login", userdata)
    .then((res) => {
      console.log(res.data.token),
        dispatch({ type: AUTH_DATA_REQUEST, payload: false });
      dispatch({ type: AUTH_DATA_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_DATA_REQUEST, payload: false });
      dispatch({ type: AUTH_DATA_FAIL, payload: true });
    });
};
