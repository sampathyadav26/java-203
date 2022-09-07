let initialstate = { count: 0 };

function reducer(state = initialstate, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }

  return state;
}

export default reducer;
