import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (values) => {
    console.log(values);

    // axios.post(`http://localhost:5000/api/login`, values).then((response) => {
    //   console.log(response);
    //   reset();
    // });
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
