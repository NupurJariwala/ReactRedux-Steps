import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postDatafun } from "../Redux/Products/action";

const initialstate = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};
const Admin = () => {
  const [data, setData] = useState(initialstate);
  const dispatch = useDispatch();
  const postdata = useSelector((store) => store.ProductReducer);
  console.log(postdata);
  const { title, price, description, category, image } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(postDatafun(data));
  };
  return (
    <div>
      <h1>Product</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="title"
          value={title}
          placeholder="Title..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="image"
          value={image}
          placeholder="Image..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="price"
          value={price}
          placeholder="Price..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="description"
          value={description}
          placeholder="Description..."
        />
        <br />
        <br />
        <select
          name="category"
          onChange={(e) => handleChange(e)}
          value={category}
        >
          <option hidden>Select Your Catrgory</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
