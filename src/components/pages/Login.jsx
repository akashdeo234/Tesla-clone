import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../Context/Context";

function Login() {
  const {name,setName} = useContext(userContext);
  const [userName, setUserName] = useState("");
  let history = useHistory();
  const signInHandler = (e) => {
    e.preventDefault();
    if (userName.length > 1) {
      history.push("/");
      setName(userName);
    } else {
      alert("Enter UserName");
    }
  };

  const inputHandler = (e) =>{
    setUserName(e.target.value);
  }
  return (
    <div className="login">
      <div className="container">
        <h1>Sign In</h1>
        <form>
          <label>Username</label>
          <input type="text" onChange={inputHandler} />
          <button className="btn sign-in-btn" onClick={signInHandler}>
            SIGN IN
          </button>
          <button
            className="btn cancel-btn"
            onClick={(e) => e.preventDefault()}
          >
            CANCEL
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
