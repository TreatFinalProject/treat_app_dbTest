import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Profile.css";

import withAuthorization from '../../components/Session/withAuthorization';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventName: "",
      eventHost: "",
      date: "",
      location: ""
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadEvents();
  }

  // Loads all books  and sets them to this.state.books
  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data, eventName: "", eventHost: "", location: "", date: "" })
      )
      .catch(err => console.log(err));
  };
   
  // Deletes a book from the database with a given id, then reloads books from the db
  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };


  // Handles updating component state when the user types into the input field
  handleChange = event => {
    const { name, value } = event.target;
    // console.log("name:"+name)
    // console.log("value:"+value)
    this.setState({
      [name]: value
    });
  };

  // Then reload events from the database
  handleSubmit = event => {
    event.preventDefault();
    // console.log('button worked')
    // console.log(this.state)
    if (this.state.eventName && this.state.location && this.state.eventHost) {
      // console.log('if statement worked!!')
      // console.log(this.state)
      API.saveEvent({
        events: [],
        eventName: this.state.eventName,
        eventHost: this.state.eventHost,
        location: this.state.location,
        date: this.state.date
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  render() {
    

    const profileImg = require('../../assets/img/profile.jpg');
   

    console.log(this.state.events)


    return (
      <div>
        &nbsp;
      <h2 className="text-center">Hello, Kelly!</h2>
      
      <h2 className="text-center">Welcome Back!</h2>
        &nbsp;
      <Container fluid>
          <Row>
            <Col size="md-3">
            </Col>
            <Col size="md-6">
               
                <Row>
                  <Col size="sm-12">
                    <div className="card">
                    <img src={profileImg} width="100" height="100"/>
                      <div className="card-body">
                        <h3>Best Friend: </h3>
                        <h3>Location:</h3>

                      </div>
                    </div>
                  </Col>
                  </Row>
              </Col>
              <Col size="md-3">
              </Col>
          </Row>
          &nbsp;
        <Row>
            <Col size="md-6">
              <Jumbotron>
                <h2>Plan an Event</h2>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.eventName}
                  onChange={this.handleChange}
                  name="eventName"
                  placeholder="Event Name (required)"
                  type="text"
                />
                <Input
                  value={this.state.eventHost}
                  onChange={this.handleChange}
                  name="eventHost"
                  placeholder="Host (required)"
                  type="text"
                />
                <Input
                  value={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                  placeholder="Location(required)"
                  type="text"

                />
                <Input
                  value={this.state.date}
                  onChange={this.handleChange}
                  name="date"
                  placeholder="Event Date(required)"
                  type="text"
                />
                <FormBtn
                  onClick={this.handleSubmit}
                >
                  Submit Event
              </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h2>Upcoming Events</h2>
              </Jumbotron>
              {this.state.events.length ? (
                <List>
                  {this.state.events.map(event => {
                    return (
                      <ListItem key={event._id}>
                        <a href={"/party/" + event._id}>
                          <strong>
                            {event.eventName} hosted by {event.eventHost}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const authCondition = (authUser) => !!authUser;
export default Profile;
