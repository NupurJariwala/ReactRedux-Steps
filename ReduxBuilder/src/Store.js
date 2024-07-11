import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./CounterReducer";
import { thunk } from "redux-thunk";
import ThemeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: ThemeReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
