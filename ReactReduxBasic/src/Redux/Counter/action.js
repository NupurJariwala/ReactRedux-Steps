import { ADD, SUB } from "../actiontype";

export function AddToCounter(val) {
  return { type: ADD, payload: val };
}

export function SubToCounter(val) {
  return { type: SUB, payload: val };
}
