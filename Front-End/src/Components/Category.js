import React, { Component } from "react";
import Heading from "./Heading";
import PostEntry from "./PostEntry";
import axios from 'axios';

export default class Category extends Component {
  constructor(props){
    super(props);

    this.state = {categories: []};
  }

componentDidMount(){
axios.get("http://localhost:8080/Category/"+this.props.match.params.id)
    .then(response => {
        this.setState({categories: response.data})
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}

  render(){
    return (
      <div>
        <Heading></Heading>
        <h1>{this.state.categories.title}</h1>
        <PostEntry></PostEntry>
      </div>
    );
  }
}
