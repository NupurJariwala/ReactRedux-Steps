import { useState } from "react";
import "./App.css";
import { store } from "./Redux/store";

function App() {
  const reduxstore = store;
  console.log(reduxstore);
  const [value, setValue] = useState(1);

  const { getState, dispatch, subscribe } = store;
  console.log(getState().counter);

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: 1 });
    console.log(getState().counter);
  };

  const handleSub = () => {
    dispatch({ type: "SUB", payload: 1 });
    console.log(getState().counter);
  };

  subscribe(() => {
    console.log("hii");
    console.log(value);
    setValue((prev) => prev + 1);
  });
  return (
    <>
      <h1>{getState().counter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </>
  );
}

export default App;
