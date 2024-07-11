import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../action";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div>
      <button
        onClick={() => dispatch(handleTheme("light"))}
        disabled={theme === "light"}
      >
        Switch to Light
      </button>
      <button
        onClick={() => dispatch(handleTheme("dark"))}
        disabled={theme === "dark"}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
