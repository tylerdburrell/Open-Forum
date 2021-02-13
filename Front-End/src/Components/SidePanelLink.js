import React from "react";
import Nav from "react-bootstrap/Nav";
import "./SidePanelLink.css";

export default function SidePanelLink(props) {
  return (
    <Nav.Link className="sidebar-link" href={props.category.slashTitle}>{props.category.title}</Nav.Link>
  );
}