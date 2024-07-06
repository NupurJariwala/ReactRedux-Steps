import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//populate method

const Edit = () => {
  const [price, setPrice] = useState(0);
  const { id } = useParams();
  //   console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => setPrice(res.data.price))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleupdate = (id) => {
    axios
      .patch(`http://localhost:8080/product/${id}`, { price })
      .then((res) => {
        console.log(res.data);
        alert("Price Updated");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Edit</h1>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Update Price"
      />
      <button
        onClick={() => {
          handleupdate(id);
        }}
      >
        UpdatePrice
      </button>
    </div>
  );
};

export default Edit;
