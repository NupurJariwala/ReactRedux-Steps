import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { store } from "../Redux/store";
import axios from "axios";
import {
  HandleFail,
  HandleRequest,
  HandleSuccess,
} from "../Redux/Product/action";

const Product = () => {
  // const value = useSelector((store) => store.ProductReducer);
  // console.log(value);

  const { isLoading, isError, data } = useSelector(
    (store) => store.ProductReducer
  );

  const dispatch = useDispatch();

  const fetchdata = () => {
    dispatch(HandleRequest(true));
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res),
        dispatch(HandleRequest(false));
        dispatch(HandleSuccess(res.data));
      })
      .catch((err) => {
        dispatch(HandleRequest(false));
        dispatch(HandleFail(true));
      });
  };
  useEffect(() => {
    fetchdata();
  }, [] );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Error</h1>
  ) : (
    <div>
      <h1>Product Here</h1>
      {data.map((el) => (
        <div key={el.id}>{el.title}</div> // Added unique key
      ))}
    </div>
  );
};

export default Product;
