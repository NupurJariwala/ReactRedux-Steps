// import { useEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  //concept of useSearchParamsa
  const [search, setSearch] = useSearchParams();
  // console.log(search.getAll("gender"));
  // useEffect(() => {
  //   setSearch({ gender: "male", category: "electronics" }); //serachparam object lay key and value
  // }, []);
  const [category, setCategory] = useState(search.getAll("category") || []);
  console.log(search.getAll("category"));

  const [sort, setSort] = useState(search.get("sort") || null);
  useEffect(() => {
    setSearch({ category, sort });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    let { value } = e.target;
    // console.log(value);

    let newcategory = [...category];

    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }
    setCategory(newcategory);
  };

  return (
    <div>
      <h1>Category</h1>
      <div>
        <input
          type="checkbox"
          value={"men's clothing"}
          checked={category.includes("men's clothing")}
          onChange={(e) => handleChange(e)}
          name=""
          id=""
        />
        Men
        <br />
        <br />
        <input
          type="checkbox"
          value={"women's clothing"}
          checked={category.includes("women's clothing")}
          onChange={(e) => handleChange(e)}
          name=""
          id=""
        />
        Women
        <br />
        <br />
        <input
          type="checkbox"
          value={"jewelery"}
          checked={category.includes("jewelery")}
          onChange={(e) => handleChange(e)}
          name=""
          id=""
        />
        Jewelery
        <br />
        <br />
        <input
          type="checkbox"
          value={"electronics"}
          checked={category.includes("electronics")}
          onChange={(e) => handleChange(e)}
          name=""
          id=""
        />
        Electronics
      </div>
      <h2>Sort</h2>
      <input type="radio" onChange={() => setSort("asc")} name="price" />
      Low To High <br /> <br />
      <input type="radio" onChange={() => setSort("desc")} name="price" />
      High To Low
    </div>
  );
};

export default Sidebar;
