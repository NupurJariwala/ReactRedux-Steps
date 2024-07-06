import { ADD, SUB } from "../actiontype";

let initialstate = {
  counter: 0,
};

// eslint-disable-next-line no-unused-vars
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD:
      return { counter: state.counter + payload };
    case SUB:
      return { counter: state.counter - payload };
    default:
      return state;
  }
};
