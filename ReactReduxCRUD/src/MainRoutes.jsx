import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./Components/Admin";
import Homepage from "./Components/Homepage";
import Edit from "./pages/Edit";
// import PrivateRoutes from "./Components/PrivateRoutes";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            // <PrivateRoutes>
            <Homepage />
            // </PrivateRoutes>
          }
        ></Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
