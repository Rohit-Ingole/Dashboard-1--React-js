const ThemeReducer = (
  state = { mode: "theme-mode-light", color: "theme-color-blue" },
  action
) => {
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
