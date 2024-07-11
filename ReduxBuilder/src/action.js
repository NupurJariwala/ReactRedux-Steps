export const handleAdd = (value) => ({
  type: "ADD",
  payload: value,
});

export const handleReduce = (value) => ({
  type: "REDUCE",
  payload: value,
});

export const handleTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});
