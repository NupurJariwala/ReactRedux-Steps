import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as CounterReducer } from "./Counter/reducer";
import { reducer as ProductReducer } from "./Product/reducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  CounterReducer,
  ProductReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
