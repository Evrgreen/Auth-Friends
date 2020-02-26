import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

export const actions = {
  SET_USER: "set_user",
  LOGGING_IN: "LoggingIn",
  LOGIN_SUCCEED: "loginSucceed",
  LOGIN_FAILED: "loginFailed"
};
const handlers = {};
const changeState = (stateKey) => {
  return function(state, action) {
    console.log(state.stateKey);
    console.log(stateKey);
    return { ...state, [stateKey]: action.payload };
  };
};
const flipBooleanValue = (stateKey) => {
  return function(state, action) {
    return { ...state, [stateKey]: !state[stateKey] };
  };
};

handlers[actions.SET_USER] = changeState("user");
handlers[actions.LOGIN_SUCCEED] = flipBooleanValue("loggedIn");
handlers[actions.LOGIN_FAILED] = changeState("error");
const initialState = { user: [], loggedIn: false, error: "" };
const rootReducer = (initialState = {}, handlers) => {
  return function(state = initialState, action) {
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
};

const store = createStore(rootReducer(initialState, handlers));
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
