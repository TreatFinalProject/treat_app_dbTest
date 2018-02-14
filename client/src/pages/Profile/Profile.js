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
import { firebase } from '../../firebase';
import withAuthorization from '../../components/Session/withAuthorization';

class Profile extends React.Component {
  constructor(props, { authUser }) {
    super(props);
    this.state = {
      events: [],
      eventName: "",
      eventHost: "",
      date: "",
      location: "",
      email: "",
      unique:[]
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState({"email": authUser.email})
      this.loadEvents();
    })
  }

  
  // Loads all books  and sets them to this.state.books
  loadEvents = user => {
    API.getEvents(this.state.email)
      .then(res =>this.setState({ events: res.data}))
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
      this.state.unique.push(event.email);
      // console.log('if statement worked!!')
      // console.log(this.state)
      API.saveEvent({
        events: [],
        eventName: this.state.eventName,
        eventHost: this.state.eventHost,
        location: this.state.location,
        date: this.state.date,
        email: this.state.email,
        unique: []
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  render() {

    const profileImg = require('../../assets/img/cat.jpg');
    const profilePic = require('../../assets/img/kelly.jpg');
   

    let title = "Hello"

    if (this.state.events.length>0) {
      title = title + ", " + this.state.events[0].eventHost
    }

    return (
      <div>
        &nbsp;
  
      <h2 className="text-center">{title}</h2>


      
      <h3 className="text-center">Welcome Back!</h3>
        &nbsp;
      <Container fluid>
      <Row>
      <Col size="md-1">
      </Col>

      <Col size="md-3">
      
       
        <div classNme="profilePic">
        <Row>
            <Col size="md-4">
            </Col>
            <Col size="md-4">
                <img src={profilePic} width="90" height="110"/>
            </Col>
            <Col size="md-4">
            </Col>
        </Row>
        </div>
      
      
        <a href="/">&ensp;&ensp;<h3 className="text-center">Kelly Q </h3></a>
      <h5 className="text-center">&ensp;&ensp;&ensp;View Upcoming Events</h5>
      
      
      </Col>
     
         
          
      <Col size="md-7">
              
                <div className="card">
                  <Row>
                    <Col size="md-4">
                       
                        <img src={profileImg} width="180" height="180"/>
                       
                    </Col>
                    <Col size="md-8">
                        <div className="card-body">
                        &nbsp;
                          <h4>&nbsp;&nbsp;Best Friend: &ensp;Ginger </h4>
                          <h4>&nbsp;&nbsp;Birthdate: &ensp;02/17/2015</h4>
                          <h4>&nbsp;&nbsp;Location: &ensp;Hoboken, NJ</h4>

                        </div>
                    </Col>
                  </Row>
                </div>
            
             
            </Col>
       
        <Col size="md-1">
        </Col>
    </Row>
    &nbsp;
    <Row>
    <Col size="md-2">
    </Col>
    <Col size="md-8">
              <Jumbotron>
                <h2>Plan an Event</h2>
              </Jumbotron>
              <form>
                Event Name
                <Input
                  value={this.state.eventName}
                  onChange={this.handleChange}
                  name="eventName"
                  placeholder="Event Name"
                  type="text"
                />
                Host
                <Input
                  value={this.state.eventHost}
                  onChange={this.handleChange}
                  name="eventHost"
                  placeholder="Host"
                  type="text"
                />
                Location
                <Input
                  value={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                  placeholder="Location"
                  type="text"

                />
                Event Date
                <Input
                  value={this.state.date}
                  onChange={this.handleChange}
                  name="date"
                  placeholder="Event Date"
                  type="text"
                />
                Email
                <Input
                value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="email"
                  type="text"

                />
                <FormBtn
                  onClick={this.handleSubmit}
                >
                  Save
              </FormBtn>
              </form>
              </Col>
            <Col size="md-2">
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
                        <a href={"/events/" + event._id}>
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
