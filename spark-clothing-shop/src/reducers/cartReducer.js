// to specify apps state changes accordding to actions
// takes current state and action
// returns the new state
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;