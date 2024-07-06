import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to={"/admin"}>Admin</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Navbar;
