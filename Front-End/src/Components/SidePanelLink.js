import React from "react";
import Nav from "react-bootstrap/Nav";
import "./SidePanelLink.css";

export default function SidePanelLink(props) {
  return (
    <Nav.Link className="sidebar-link" href={'category/'+props.category.id}>{props.category.title}</Nav.Link>
  );
}