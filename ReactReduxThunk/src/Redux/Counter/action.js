import { ADD, SUB } from "../actiontype";

export const HandleAdd = (value) => {
  return { type: ADD, payload: value };
};

export const HandleSub = (value) => {
  return { type: SUB, payload: value };
};
