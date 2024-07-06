export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { couter: state.couter + action.payload };
    case "SUB":
      return { couter: state.couter - action.payload };
    default:
      return state;
  }
};
