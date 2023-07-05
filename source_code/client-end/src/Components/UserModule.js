import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import axios from "axios";

const UserModule = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [sessionActive, setSessionActive] = useState(false);
  const userDetails = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [userSignature, setUserSignature] = useState(userDetails);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isLogin) loginAPI();
    else signUpAPI();
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const loginAPI = () => {
    axios
      .post("http://localhost:3001/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.isValid) {
          alert("Login Successful for: " + response.data.firstName);
          setSessionActive(true);
          clearForm();
          setUserSignature(response.data);
        } else {
          alert(response.data.message);
          clearForm();
        }
      });
  };

  const signUpAPI = () => {
    console.log(email);
    axios
      .post("http://localhost:3001/signup/", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert(response.data.message);
          setIsLogin(true);
          clearForm();
        } else {
          alert(response.data.message);
          clearForm();
        }
      });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    setUserSignature(userDetails);
    setSessionActive(false);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey={
          sessionActive ? "assignment3-user-info" : "assignment3-login-signup"
        }
        className="m-3"
        fill
      >
        <Tab eventKey="assignment3-login-signup" title="Login/Signup">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Row>
              <Container className="my-4">
                <Row>
                  <Col>
                    {!sessionActive ? (
                      <div>
                        <h2 className="text-center m-3">
                          {isLogin ? "Login" : "Sign Up"}
                        </h2>
                        <Form onSubmit={handleFormSubmit}>
                          {!isLogin && (
                            <Form.Group controlId="formName">
                              <Form.Label> First Name</Form.Label>
                              <Form.Control
                                type="name"
                                placeholder="Enter First name"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                className="mb-3"
                              />
                              <Form.Label> Last Name</Form.Label>
                              <Form.Control
                                type="name"
                                placeholder="Enter Last name"
                                value={lastName}
                                onChange={handleLastNameChange}
                                className="mb-3"
                              />
                            </Form.Group>
                          )}
                          <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={handleEmailChange}
                              className="mb-3"
                            />
                          </Form.Group>
                          <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          </Form.Group>
                          <Row className="text-center">
                            <Button
                              variant="dark"
                              type="submit"
                              className="mt-4"
                            >
                              {isLogin ? "Login" : "Sign Up"}
                            </Button>
                          </Row>
                        </Form>
                        <Row className="text-center">
                          <Button
                            className="mt-3 btn btn-outline-dark btn-sm"
                            variant=""
                            onClick={toggleForm}
                          >
                            {isLogin
                              ? "Need to create an account?"
                              : "Already have an account?"}
                          </Button>
                        </Row>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-danger">
                          Logout of the current session to use this Form!
                        </h3>
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="assignment3-user-info" title="User Information">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Row>
              <Container className="my-4">
                <Row>
                  <Col>
                    <h2 className="text-center m-3">User Information</h2>
                    {sessionActive ? (
                      <div>
                        <p>
                          Name: {userSignature.firstName}{" "}
                          {userSignature.lastName}
                        </p>
                        <p>Email: {userSignature.email}</p>
                        <Button variant="dark" onClick={handleLogout}>
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p>You need to login to see your information.</p>
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </Row>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserModule;
