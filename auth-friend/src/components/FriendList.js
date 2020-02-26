import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggingIn } from "../actions/action_creators/actions";

const FriendList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(loggingIn());
  }, []);

  return null;
};

export default FriendList;
