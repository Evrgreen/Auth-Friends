import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>FriendList.io</h1>
        <LoginForm>Login</LoginForm>
        <FriendList />
      </header>
    </div>
  );
}

export default App;
