import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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

  // Then reload books from the database
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
    console.log(this.state.events)


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Event Should I Plan?</h1>
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
              <h1>Upcoming Events</h1>
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
    );
  }
}
export default Profile;
