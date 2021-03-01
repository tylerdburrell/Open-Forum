import React, { Component } from "react";
import Heading from "./Heading";
import Post from "./Post";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import axios from 'axios';

export default class Category extends Component {
  constructor(props){
    super(props);

    this.state = {
      categories: [],
      posts: []
    };
  }

componentDidMount(){
    axios.get("http://localhost:8080/Category/"+this.props.match.params.id)
    .then(response => {
        this.setState({categories: response.data})
        axios.get("http://localhost:8080/Posts/", {params: {category: this.state.categories.title}})
          .then(response => {
              this.setState({posts: response.data})
              console.log(response.data)
          })
          .catch((error) => {
              console.log(error);
          })
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}

postList(){
  return this.state.posts.map((currentPost) => {
    return (
      <div>
        <Post
          key={currentPost.id}
          post={currentPost}
        />
      </div>
    );
  })
}

  render(){
    return (
      <div>
        <Heading></Heading>
        <h1>{this.state.categories.title}</h1>
        <Fab href={'/post-entry/'+this.state.categories.id}>
          <AddIcon />
        </Fab>
        {this.postList()}
      </div>
    );
  }
}
