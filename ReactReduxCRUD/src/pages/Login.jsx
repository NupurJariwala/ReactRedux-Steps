import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postuserdata } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userdata = useSelector((s) => s.AuthReducer); //data collect from store ,s is only name of parameter
  console.log(userdata);

  const { isLoading, isError, isAuth } = useSelector((s) => s.AuthReducer); //data collect from store ,s is only name of parameter
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password,
    };
    console.log(userdata);
    // eslint-disable-next-line no-unused-vars
    dispatch(postuserdata(userdata)).then((res) => {
      navigate("/");
    });
  };
  return isLoading ? (
    <h1 style={{ color: "#85929E" }}>Please Wait...</h1>
  ) : isError ? (
    <h1 style={{ color: "#CB4335" }}>Something Went to Wrong...</h1>
  ) : (
    <div>
      {isAuth ? (
        <h1 style={{ color: "green" }}>You are Login</h1>
      ) : (
        <h1 style={{ color: "red" }}>Please Login</h1>
      )}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
