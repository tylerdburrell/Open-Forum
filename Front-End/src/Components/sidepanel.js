import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import "./SidePanel.css";
import axios from "axios";
import SidePanelLink from "./SidePanelLink";

export default class Sidepanel extends Component {
  constructor(props){
    super(props);

    this.state = {categories: []};
  }

componentDidMount(){
axios.get("http://localhost:8080/Category")
    .then(response => {
        this.setState({categories: response.data})
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}

categoryList(){
  return this.state.categories.map((currentCategory) => {
    return (
        <SidePanelLink
          key={currentCategory.id}
          category={currentCategory}
        />
    );
  })
}

render(){
  return(
    <Nav defaultActiveKey="/home" className="flex-column color-sidebar sidebar">
      {this.categoryList()}
    </Nav>
  );
}

}