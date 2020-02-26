import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>FriendList.io</h1>

        <Router>
          <Switch>
            {/* Protected Route */}
            <ProtectedRoute exact path="/protected" component={FriendList} />
            <Route path="/login" component={LoginForm} />
            <Route component={LoginForm} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
