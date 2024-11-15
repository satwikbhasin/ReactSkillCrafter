import React from "react";
import Layout from "../components/layout";
import AssignmentCard from "../components/assignmentCard";
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
      "Create an inventory management system",
      "Implement CREATE & READ operations for the inventory",
      "Handle asynchronous operations and manage state effectively"
    ],
    link: "/assignment2"
  },
  {
    title: "Assignment 3",
    summary: [
      "Add UPDATE and DELETE operations to the inventory system",
      "Implement user authentication",
      "Create user login & signup pages",
      "Create a profile page for logged-in users",
      "Maintain user session",
    ],
    link: "/assignment3"
  }
];

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-center small-heading">
          Select an assignment below
        </h1>
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
      </div>
    </Layout>
  );
};

export default Home;