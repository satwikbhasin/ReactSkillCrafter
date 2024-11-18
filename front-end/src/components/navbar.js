import React from "react";
import { Navbar, Image, Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo from "../assets/react.png";
import "../styling/navbar.css";

const assignments = [
  { title: "Assignment 1", link: "/assignment1" },
  { title: "Assignment 2", link: "/assignment2" },
  { title: "Assignment 3", link: "/assignment3" },
  { title: "Home", link: "/" },
];

export const NavBar = () => {
  const location = useLocation();
  const currentAssignment = assignments.find(assignment => assignment.link === location.pathname);

  return (
    <Navbar className="navbar">
      <Navbar.Brand href="/">
        <Image
          src={logo}
          width={40}
          height={40}
          rounded
          fluid
          className="ms-2 mt-2 mb-2"
          alt=""
        />
        <span className="ms-2 fw-bold">React Pilot</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Nav className="ml-auto">
        {currentAssignment && (
          <NavDropdown title={currentAssignment.title} id="basic-nav-dropdown" className="nav-dropdown fw-bold">
            {assignments
              .filter(assignment => assignment.link !== location.pathname)
              .map((assignment, index) => (
                <NavDropdown.Item key={index} href={assignment.link}>
                  {assignment.title}
                </NavDropdown.Item>
              ))}
          </NavDropdown>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;