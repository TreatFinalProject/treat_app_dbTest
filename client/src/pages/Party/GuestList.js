import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  // When the component mounts, load all guests and save them to this.state.guest
  componentDidMount() {
    this.loadGuests();
  }


  // Loads all guests  and sets them to this.state.guest
  loadGuests = () => {
    API.getGuests()
      .then(res =>
        this.setState({ guests: res.data, firstName: "", lastName: "", email: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a todo from the database with a given id, then reloads todos from the db
  deleteGuest = id => {
    API.deleteGuest(id)
      .then(res => this.loadGuests())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Then reload todos from the database
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email) {
      API.saveGuest({
        guests: [],
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,

      })
        .then(res => this.loadGuests())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      
        <Container fluid>

          <Row>
          <Col size="md-6">
            &nbsp;
              <Jumbotron>
                <h2>Add Guests</h2>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  name="firstName"
                  placeholder="First name (required)"
                  type="text"
                />
                <Input
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  name="lastName"
                  placeholder="Last name (required)"
                  type="text"
                />
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="email (required)"
                  type="text"

                />
                <FormBtn
                  onClick={this.handleSubmit}
                >
                  Add 
            </FormBtn>
              </form>
            </Col>
            <Col size="md-6">
            &nbsp;
              <Jumbotron>
                <h2>Guest List</h2>
              </Jumbotron>
              {this.state.guests.length ? (
                <List>
                  {this.state.guests.map(guest => {
                    return (
                      <ListItem key={guest._id}>
                        <a href={"/guests/" + guest._id}>
                          <strong>
                            {guest.firstName } {guest.lastName}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteGuest(guest._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Guests to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
     
    );
  }
}
export default GuestList;