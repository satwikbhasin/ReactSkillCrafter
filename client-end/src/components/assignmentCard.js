import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/assignment-card.css";

const AssignmentCard = ({ title, summary, link }) => {
    return (
        <Link to={link} className="assignment-card-link">
            <Card className="assignment-card">
                <Card.Header className="assignment-card-header">{title}</Card.Header>
                <Card.Body className="assignment-card-body">
                    <ul className="assignment-card-text">
                        {summary.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default AssignmentCard;