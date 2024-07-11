import { useSelector } from "react-redux";

const Countervalue = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>
        Counter <br /> {count}
      </h1>
    </div>
  );
};

export default Countervalue;
