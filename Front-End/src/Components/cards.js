import React from "react";
import Card from "react-bootstrap/Card";

export default function Topics(props) {
  return (
    <Card border="dark" className="topics-wrapper">
      <Card.Link href={props.category.slashTitle}>
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
  );
}
