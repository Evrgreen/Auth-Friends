import React from "react";
import { useForm } from "react-hook-form";
import { loggingIn } from "../actions/action_creators/actions";

const LoginForm = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();
  console.log(props);
  const onSubmit = (values) => {
    console.log(values);
    const results = loggingIn(values);
    if (results) {
      props.history.push("/protected");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Username:
        <input type="text" id="name" name="username" ref={register()} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" id="password" name="password" ref={register()} />
      </label>
      <button>Log In</button>
    </form>
  );
};

export default LoginForm;
