import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFriends, loggingIn } from "../actions/action_creators/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";

const FriendList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        setFriends(response.data);
      });
  }, []);
  console.log(friends);
  return (
    <>
      <AddFriendForm setFriends={setFriends} />
      {friends.length > 1 ? (
        friends.map((friend) => (
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
          </div>
        ))
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default FriendList;
