import { useDispatch, useSelector } from "react-redux";
import { HandleAdd, HandleSub } from "../Redux/Counter/action";

const Counter = () => {
  const countervalue = useSelector((store) => store.CounterReducer.counter);
  const dispatch = useDispatch();
  console.log(countervalue);
  return (
    <div>
      <h1>Counter : {countervalue}</h1>
      <button onClick={() => dispatch(HandleAdd(1))}>+</button>
      <button onClick={() => dispatch(HandleSub(1))}>-</button>
    </div>
  );
};

export default Counter;
