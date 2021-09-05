import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
