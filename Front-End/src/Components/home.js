import React, {Component} from "react";
import Heading from "./Heading";
import Topic from "./Topic";
import SidePanel from "./SidePanel";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class Home extends Component {
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
        <Topic
          key={currentCategory.id}
          category={currentCategory}
        />
    );
  })
}


  render(){
    return (
      <div>
        <Heading></Heading>
        <Container fluid>
          <Row>
            <Col sm id="sidebar=wrapper">
              <SidePanel />
            </Col>
            {this.categoryList()}
          </Row>
        </Container>
      </div>
    )
  }
  
}
