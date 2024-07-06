import { legacy_createStore, combineReducers } from "redux";
import { reducer as CounterReducer } from "./Counter/reducer";
import { reducer as ProductReducer } from "./Product/reducer";

let rootReducer = combineReducers({
  CounterReducer, //CounterReducer:CounterReducer {key:value}
  ProductReducer,
});

export const store = legacy_createStore(rootReducer);
