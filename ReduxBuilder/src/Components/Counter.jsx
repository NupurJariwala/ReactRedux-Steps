import CounterValue from "./Countervalue";
import CounterButtons from "./Counterbutton";
import { useSelector } from "react-redux";

const Counter = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      style={{ height: "200px" }}
      className={`counter ${theme === "light" ? "light_theme" : "dark_theme"}`}
    >
      <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default Counter;
