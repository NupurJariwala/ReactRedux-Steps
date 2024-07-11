import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../action";

const Counterbutton = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginLeft: "90px",
      }}
    >
      <button onClick={() => dispatch(handleAdd(1))}>+</button>
      <button onClick={() => dispatch(handleReduce(1))}>-</button>
    </div>
  );
};

export default Counterbutton;
