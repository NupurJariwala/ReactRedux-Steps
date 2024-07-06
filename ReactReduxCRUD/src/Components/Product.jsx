import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useSearchParams } from "react-router-dom";
import { getdataFromServer } from "../Redux/Products/action";
import axios from "axios";

const Product = () => {
  const productdata = useSelector((store) => store.ProductReducer);
  console.log(productdata);

  const { isLoading, isError, data, totalpage } = useSelector(
    (store) => store.ProductReducer
  );
  // console.log(totalpage);

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useSearchParams();
  // console.log(search.getAll("category"));

  const [page, setPage] = useState(1);

  const [find, setFind] = useState("");

  useEffect(() => {
    let paraombj = {
      params: {
        // category: [
        //   "jewelery",
        //   "electronics",
        //   "men's clothing",
        //   "women's clothing",
        // ],

        category: search.getAll("category"),
        _sort: "price",
        _limit: 5,
        _page: page,
        _order: search.get("sort"),
        q: find,
      },
    };
    let id = setTimeout(() => {
      dispatch(getdataFromServer(paraombj));
    }, 1000);

    return () => {
      console.log("clean up");
      clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, find]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(getdataFromServer({}));
      })
      .catch((err) => console.log(err));
  };
  return isLoading ? (
    <h1 style={{ color: "#2980B9" }}>Loading...</h1>
  ) : isError ? (
    <h1 style={{ color: "red" }}>Something Wrong</h1>
  ) : (
    <div>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          onChange={(e) => setFind(e.target.value)}
          placeholder="search here..."
        />
      </div>
      <div style={{ textAlign: "right", margin: "10px" }}>
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled>{page}</button>
        <button
          disabled={page == totalpage / 4}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {data.length > 0 &&
          data.map((el) => (
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.5) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                textAlign: "center",
              }}
              key={el.id}
            >
              <img src={el.image} alt="" height={200} width={200} />
              <p>{el.title}</p>
              <p>{el.price}</p>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                }}
              >
                <button onClick={() => handleDelete(el.id)}>Delete</button>
                <Link to={`/edit/${el.id}`}>
                  <button>Edit</button>
                </Link>
                <br />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
