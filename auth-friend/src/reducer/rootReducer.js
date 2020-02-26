import { actions } from "../actions/constants/consts";
import * as utils from "../utils";

const initialState = {
  user: [],
  loggingIn: false,
  loggedIn: false,
  error: "",
  token: ""
};

const handlers = {};

//Handlers that are called by the reducer that update state

handlers[actions.SET_USER] = utils.updateValueInState("token");
handlers[actions.LOGIN_SUCCEED] = utils.flipBoolValueInState("loggedIn");
handlers[actions.LOGIN_FAILED] = utils.updateValueInState("error");

const rootReducer = (initialState = {}, handlers) => {
  return function(state = initialState, action) {
    console.log(state, action, handlers);
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
};

export default rootReducer(initialState, handlers);
