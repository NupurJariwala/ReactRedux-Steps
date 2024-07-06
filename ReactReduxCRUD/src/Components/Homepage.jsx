import Product from "./Product";
import Sidebar from "./Sidebar";
const Homepage = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%", marginTop: "10px" }}>
          <Sidebar />
        </div>
        <div style={{ width: "80%" }}>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
