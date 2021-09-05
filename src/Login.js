import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
        />
        <div className="login-text">
          <h1>Sign In to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign using Google</Button>
      </div>
    </div>
  );
}

export default Login;
