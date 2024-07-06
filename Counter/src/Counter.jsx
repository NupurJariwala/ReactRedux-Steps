import { store } from "./Redux/store";
import { useState } from "react";
const Counter = () => {
  const reduxstore = store;
  let [value, setValue] = useState(1);
  console.log(reduxstore);
  console.log(reduxstore.getState().counter);

  const handleAdd = () => {
    reduxstore.dispatch({ type: "ADD", payload: 1 });
    console.log(reduxstore.getState().counter);
  };
  const handleSub = () => {
    reduxstore.dispatch({ type: "SUB", payload: 1 });
    console.log(reduxstore.getState().counter);
  };

  reduxstore.subscribe(() => {
    console.log("hi");
    setValue((prev) => prev + 1);
  });
  return (
    <div>
      <h1>Counter:{reduxstore.getState().counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>
  );
};

export default Counter;
