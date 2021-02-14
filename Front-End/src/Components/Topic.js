import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Topic.css";

export default function Topic(props) {
  return (
    <Col>
      <Card border="dark" className="topics-wrapper">
        <Card.Link href={'category/'+props.category.id}>
          <Card.Img variant="top" src={props.category.imageURL} />
          <Card.Body>
            <Card.Title>{props.category.title}</Card.Title>

            <Card.Text>{props.category.flavorText}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card.Link>
      </Card>
    </Col>
  );
}
