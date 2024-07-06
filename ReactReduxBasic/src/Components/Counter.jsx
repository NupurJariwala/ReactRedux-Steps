import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import { AddToCounter, SubToCounter } from "../Redux/Counter/action";

const Counter = () => {
  const reduxstore = store;
  console.log(reduxstore);

  // const { dispatch, getState, subscribe } = store;
  // console.log(getState().counter);

  const dispatch = useDispatch(); //in place of dispatch
  const counter = useSelector((s) => s.CounterReducer.counter); // in place of getState ,as a parameter anythink you can pass
  console.log(counter);
  return (
    <div>
      {/* <h2>{getState().counter}</h2> */}
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch(AddToCounter(1)); //type: ADD, payload: 1
          // console.log(getState().counter);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(SubToCounter(1)); //type: SUB, payload: 1
          // console.log(getState().counter);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
