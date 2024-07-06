import {
  GET_PRODUCT_Fail,
  GET_PRODUCT_Request,
  GET_PRODUCT_Success,
} from "../actiontype";

export function HandleRequest(value) {
  return { type: GET_PRODUCT_Request, payload: value };
}

export function HandleSuccess(value) {
  return { type: GET_PRODUCT_Success, payload: value };
}

export function HandleFail(value) {
  return { type: GET_PRODUCT_Fail, payload: value };
}
