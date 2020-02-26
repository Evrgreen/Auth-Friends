//Helper function that can be bound to an action handler
//takes a single arg as a string for the state property it will update
//returns a function that can be called as a regular dispatch
//action will toggle the boolean value of the property
// example: handler[LOVES_TACOS] = flipBoolValueInState('lovesTacos')
//          dispatch(type:LOVES_TACOS)

const flipBoolValueInState = (stateKey) => {
  return function(state, action) {
    return { ...state, [stateKey]: !state[stateKey] };
  };
};

export default flipBoolValueInState;
