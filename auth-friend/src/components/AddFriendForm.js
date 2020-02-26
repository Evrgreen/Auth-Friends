import React from "react";
import { useForm } from "react-hook-form";
import { addNewFriend } from "../actions/action_creators/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import e from "express"

const AddFriendForm = ({ setFriends }) => {
  const { register, error, handleSubmit } = useForm();

  const onSubmit = (values) => {
    values.id = Date.now();
    axiosWithAuth()
      .post("/api/friends", values)
      .then((response) => {
        console.log(response.data);
        setFriends(response.data);
      })
      .catch((error) => error);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <input name="name" ref={register} id="name" />
      </label>
      <label htmlFor="age">
        <input name="age" ref={register} id="age" />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" ref={register} id="email" />
      </label>
      <button>Add Friend</button>
    </form>
  );
};
export default AddFriendForm;
