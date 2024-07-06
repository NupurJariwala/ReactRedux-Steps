import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

let initialvalue = {
  counter: 0,
};

export const store = legacy_createStore(reducer, initialvalue);
