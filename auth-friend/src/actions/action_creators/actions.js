import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const loggingIn = async (value) => {
  axiosWithAuth()
    .post("/api/login", { username: "test", password: "test" })
    .then((response) => {
      console.log("Got a response");
      console.log(response.data.payload);
      window.localStorage.setItem("token", response.data.payload);
      this.props.history.push("/protected");
    })
    .catch((error) => console.log({ error }));
  return {
    type: "set_user",
    payload: value
  };
};
