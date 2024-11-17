import React from "react";
import Layout from "../components/layout";
import AssignmentCard from "../components/home/assignmentCard";
import { Github } from "react-bootstrap-icons";
import "../styling/assignment-card.css";

const assignments = [
  {
    title: "Assignment 1",
    summary: [
      "Set up a basic React app + Node.js + Express.js",
      "Display an image along with a heading and information",
      "Add two numbers using both frontend and backend"
    ],
    link: "/assignment1"
  },
  {
    title: "Assignment 2",
    summary: [
      "Integrate a third-party API into your application & display data in a user-friendly manner",
      "Create an inventory management system and implement CREATE, READ & UPDATE operations for the inventory"
    ],
    link: "/assignment2"
  },
  {
    title: "Assignment 3",
    summary: [
      "Add DELETE operations to the inventory system",
      "Implement user authentication including user login & signup pages, a profile page for logged-in users, and maintaining user sessions"
    ],
    link: "/assignment3"
  }
];

const Home = () => {
  return (
    <Layout>
      <div className="border p-5 position-relative">
        <h1 className="display-4 text-center">Welcome to My First Website</h1>
        <p className="lead text-left">
          I built this while learning the MERN stack as a part of my ICSI 518 Software Engineering class at UAlbany. This project consists of a series of gradual assignments designed to help you learn the MERN stack step-by-step. Each assignment builds on the previous one, introducing new concepts and techniques to enhance your understanding of full-stack development.
        </p>
        Refer to the code on <a href="https://github.com/satwikbhasin/my-first-website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: "inline-block", marginLeft: '5px' }}><Github /> GitHub</a>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '12px', color: '#888' }}>
          Created by <a href="https://satwikbhasin.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#2FB883' }}>Satwik Bhasin</a>
        </div>
      </div>
      <div className="assignment-cards-container">
        {assignments.map((assignment, index) => (
          <AssignmentCard
            key={index}
            title={assignment.title}
            summary={assignment.summary}
            link={assignment.link}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;