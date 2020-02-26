import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./index";

function App() {
  const { register, handleSubmit, errors, reset } = useForm();
  const newState = useSelector((state) => state);
  console.log(newState);
  const onSubmit = (values) => {
    console.log(values);
    dispatch({ type: actions.SET_USER, payload: values.username });

    // axios.post(`http://localhost:5000/api/login`, values).then((response) => {
    //   console.log(response);
    //   reset();
    // });
  };
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            <input type="text" id="name" name="username" ref={register()} />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              ref={register()}
            />
          </label>
          <button>Log In</button>
        </form>
        <button
          onClick={() => dispatch({ type: actions.SET_USER, payload: "Steve" })}
        >
          Update
        </button>
        <button onClick={() => dispatch({ type: actions.LOGGEDIN })}>
          Update
        </button>
      </header>
    </div>
  );
}

export default App;
