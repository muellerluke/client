import React, { useState } from "react";
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h3>Sign In</h3>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-main" type="submit" onClick={handleSubmit}>
          Sign In
        </button>{" "}
        <br />
        <input type="checkbox" />
        <label htmlFor="">Remember Me</label>
      </form>
    </div>
  );
}
