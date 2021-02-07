import React, {Component} from "react";
import Heading from "./header";
import Topics from "./cards";
import SidePanel from "./sidepanel";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from "react-bootstrap/Card";

const Category = props => (
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
)
  

export default class Home extends Component {
  // const topics = [
  //   {
  //     key: 1,
  //     slashTitle: "/sports",
  //     imageURL:
  //       "https://images-na.ssl-images-amazon.com/images/I/412cxLInx8L._AC_SY580_.jpg",
  //     title: "Sports",
  //     flavorText: "From Football to HackySack"
  //   },
  //   {
  //     key: 2,
  //     slashTitle: "/education",
  //     imageURL:
  //       "https://builtin.com/sites/default/files/styles/thumbnail/public/2019-04/big-data-education.png",
  //     title: "Education",
  //     flavorText: "From Addition to Nuclear Physics"
  //   },
  //   {
  //     key: 3,
  //     slashTitle: "/tv-shows",
  //     imageURL:
  //       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-shows-1582317535.jpg",
  //     title: "TV Shows",
  //     flavorText: "From iCarly to Broke Back Mountain"
  //   },
  //   {
  //     key: 4,
  //     slashTitle: "/video-games",
  //     imageURL:
  //       "https://assets.weforum.org/article/image/5wlXbzjwAITqYYyaeCDcvR5S1QN39afvkA3soHBBv04.jpg",
  //     title: "Video Games",
  //     flavorText: "From Animal Crossing to Saints Row"
  //   },
  //   {
  //     key: 5,
  //     slashTitle: "/investments",
  //     imageURL:
  //       "https://specials-images.forbesimg.com/imageserve/5d6ba3db68cb0a0008c1089e/960x0.jpg?fit=scale",
  //     title: "Investments",
  //     flavorText: "From Penny Stocks to Losing Daddies Fortune"
  //   },
  //   {
  //     key: 6,
  //     slashTitle: "/ai",
  //     imageURL:
  //       "https://www.surveycto.com/wp-content/uploads/2018/04/ai-and-dev.jpg",
  //     title: "Artificial Intelligence",
  //     flavorText: "From Tesla to Taking over the world"
  //   }
  // ];

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
        <Category
          category={currentCategory}
        />
    );
  })
}


  render(){
    return (
      <div>
        <Heading></Heading>
        {/* <Topics></Topics> */}
        <Container fluid>
          <Row>
            <Col sm id="sidebar=wrapper">
              <SidePanel />
            </Col>
            <Col>
            {this.categoryList()}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  
}
