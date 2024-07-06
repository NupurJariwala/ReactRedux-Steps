import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchdata } from "../Redux/Product/action";

export const Product = () => {
  // const productvalue = useSelector((store) => store.ProductReducer);
  // console.log(productvalue);

  const { isLoading, isError, data } = useSelector(
    (store) => store.ProductReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // fetchdata(dispatch); //not correct dispatch object consider ,function controlling dispatch
    dispatch(fetchdata);
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Something went to wrong</h1>
  ) : (
    <div>
      <h1>Product</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {data.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt="" height={200} width={200} />
            <h3>{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
