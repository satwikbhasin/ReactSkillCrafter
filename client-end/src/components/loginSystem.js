import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Cookies from "js-cookie";
import { loginAPI, signUpAPI } from "../services/loginSystemAPI's";

const LoginSystem = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [sessionActive, setSessionActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const userDetails = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [userSignature, setUserSignature] = useState(userDetails);

  useEffect(() => {
    const storedUser = Cookies.get("userSignature");
    if (storedUser) {
      setUserSignature(JSON.parse(storedUser));
      setSessionActive(true);
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (isLogin) {
      loginAPI(email, password).then((response) => {
        setLoading(false);
        if (response.data.isValid) {
          alert("Login Successful for: " + response.data.firstName);
          setSessionActive(true);
          clearForm();
          setUserSignature(response.data);
          Cookies.set("userSignature", JSON.stringify(response.data), { expires: 3 });
        } else {
          alert(response.data.message);
          clearForm();
        }
      });
    } else {
      signUpAPI(firstName, lastName, email, password).then((response) => {
        setLoading(false);
        if (response.data.success) {
          alert(response.data.message);
          setIsLogin(true);
          clearForm();
        } else {
          alert(response.data.message);
          clearForm();
        }
      });
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const handleLogout = () => {
    setUserSignature(userDetails);
    setSessionActive(false);
    Cookies.remove("userSignature");
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {sessionActive ? (
            <div>
              <h2 className="text-center m-3">User Information</h2>
              <p>
                Name: {userSignature.firstName} {userSignature.lastName}
              </p>
              <p>Email: {userSignature.email}</p>
              <Button variant="dark" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <h2 className="text-center m-3">{isLogin ? "Login" : "Sign Up"}</h2>
              <Form onSubmit={handleFormSubmit}>
                {!isLogin && (
                  <Form.Group controlId="formName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="mb-3"
                    />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
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
                    onChange={(event) => setEmail(event.target.value)}
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Row className="text-center">
                  <Button variant="dark" type="submit" className="mt-4" disabled={loading}>
                    {loading ? <span className="loader"></span> : isLogin ? "Login" : "Sign Up"}
                  </Button>
                </Row>
              </Form>
              <Row className="text-center">
                <Button
                  variant="outline-dark"
                  className="mt-3 btn-sm"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin
                    ? "Need to create an account?"
                    : "Already have an account?"}
                </Button>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSystem;