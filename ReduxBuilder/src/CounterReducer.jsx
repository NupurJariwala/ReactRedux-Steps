const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "REDUCE":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default CounterReducer;
