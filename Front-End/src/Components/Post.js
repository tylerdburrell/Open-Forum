import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Post.css";

export default function Post(props) {
  return (
    <Col>
      <Card border="dark" className="topics-wrapper">
          <Card.Body>
            <Card.Title>{props.post.title}</Card.Title>
            <Card.Text>{props.post.content}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.post.date}</small>
          </Card.Footer>
      </Card>
    </Col>
  );
}