import React from "react";
import { Navbar, Image, NavDropdown, Nav } from "react-bootstrap";
import logo from "../assets/sb-logo.jpg";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Image
          src={logo}
          width={50}
          height={50}
          rounded
          fluid
          className="ms-2 mt-2 mb-2"
          alt=""
        />
        <text className="ms-2">Satwik Bhasin - ICSI 518 Lab Assignments</text>
      </Navbar.Brand>
      <Nav className="">
        <NavDropdown title="Assignments" id="assignments-dropdown">
          <NavDropdown.Item href="/assignment1">Assignment 1</NavDropdown.Item>
          <NavDropdown.Item href="/assignment2">Assignment 2</NavDropdown.Item>
          <NavDropdown.Item href="/assignment3">Assignment 3</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
