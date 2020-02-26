//Helper function that can be bound to an action handler
//takes a single arg as a string for the state property it will update
//returns a function that can be called as a regular dispatch
// example: handler[SET_NAME] = updateValueInState('name')
//          dispatch(type:SET_NAME, payload:"Robert")

const updateValueInState = (stateKey) => {
  return function(state, action) {
    console.log(action);
    return { ...state, [stateKey]: action.payload };
  };
};

export default updateValueInState;
