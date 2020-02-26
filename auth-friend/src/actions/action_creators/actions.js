import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const loggingIn = async (value) => {
  axiosWithAuth()
    .post("/api/login", value)
    .then((response) => {
      console.log("Got a response");
      console.log(response.data.payload);
      window.localStorage.setItem("token", response.data.payload);
      return true;
    })
    .catch((error) => console.log({ error }));
  return {
    type: "set_user",
    payload: value
  };
};
export const getFriends = async () => {
  await axiosWithAuth()
    .get("/api/friends")
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const addNewFriend = async (user) => {
  await axiosWithAuth()
    .post("/api/friends", user)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => error);
};
