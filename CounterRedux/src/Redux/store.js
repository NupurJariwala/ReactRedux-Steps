import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialstate = {
  counter: 0,
};

export const store = legacy_createStore(reducer, initialstate);
