import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./login-view.scss";
import { Link } from "react-router-dom";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://myflixluke.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("no such user");
      });
  };

  return (
    <Container className="login-container">
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="button-main"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Link to={`/register`}>
          <Button variant="link" className="registerButton" type="submit">
            Sign Up
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
