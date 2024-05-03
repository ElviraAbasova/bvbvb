function reduce(state, action) {
  switch (action.type) {
    case "Settype":
      return { ...state, title: action.title };
    case "Settype2":
      return { ...state, desc: action.desc };
    case "Settype3":
      return { ...state, number: action.number };

    default:
      break;
  }
}

export default reduce;
