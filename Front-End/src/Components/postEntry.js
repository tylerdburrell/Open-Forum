import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Heading from "./Heading";

export default class PostEntry extends Component {
  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onExpand = this.onExpand.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      content: "",
      expanded: false,
      categories: []
    };
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

  onChangeTitle(e){
    this.setState({
        title: e.target.value
    })
  }

  onChangeContent(e){
      this.setState({
          content: e.target.value
      })
  }

  onExpand(e) {
    this.setState({
      expanded: true
    });
  }

  onSubmit(e){
    e.preventDefault();

        const post = {
            category: this.state.categories.title,
            title: this.state.title,
            content: this.state.content,
            date: Date().toLocaleString()
        }

        axios.post("http://localhost:8080/Posts", post)
        .then(res => console.log(res.data));

        console.log(post);

        window.location = "/category/"+this.props.match.params.id;
      
  }

  render(){
    return (
      <div>
      <Heading></Heading>
        <h1>{this.state.categories.title}</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Post Title</Form.Label>
            <Form.Control type="text" placeholder="Title" value={this.state.title} onChange={this.onChangeTitle}/>
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3} name="content" value={this.state.content} onChange={this.onChangeContent}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
  
}
