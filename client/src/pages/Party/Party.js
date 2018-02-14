import React from "react";
import { Router, Route } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Images from "../../components/Images";
import Todo from "./Todo";
import GuestList from "./GuestList";
import API from "../../utils/API";

// import Rsvp from "./Rsvp";
// import Inspiration from "./Inspiration";


class Party extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           event: {}
          };
    }

    // When this component mounts, grab the event with the _id of this.props.match.params.id
  componentDidMount() {
    API.getEvent(this.props.match.params.id)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err));
  }

    componentWillMount() {
        this.loadEvents();
      }
    
      // Loads all books  and sets them to this.state.books
      loadEvents = () => {
        API.getEvents()
          .then(res =>
            this.setState({ events: res.data })
          )
          .catch(err => console.log(err));
      };


    render() {
        const profileImg = require('../../assets/img/cat.jpg');

        return (
            <div>
                <Container style={{ marginTop: 30 }}>
                &nbsp;
                    <Row>
                        {/* Dash Column */}
                        
                        <Col size="md-3">
                            <h1 className="text-left">Dashboard</h1>
                            <ul className="list-group list-group-flush">
                                <a href="/party/todo" className="list-group-item list-group-item-action">To Do</a>
                                <a href="/party/guestlist" className="list-group-item list-group-item-action">Guest List</a>
                                {/* <a href="/party/rsvp" className="list-group-item list-group-item-action">RSVP</a> */}
                                {/* <a href="/party/inspiration" className="list-group-item list-group-item-action">Inspiration</a> */}
                            </ul>
                        </Col>
                        {/* Event Column */}
                        <Col size="md-9">
                            <h1 className="text-center">{this.state.event.eventName}</h1>
                            {/* Info Row */}
                            <div className="card">
                        <Row>
                       
                          <Col size="md-4">
                             
                              <img src={profileImg} width="190" height="190"/>
                             
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

                            {/* Changing Dash Component Row */}
                            <Row>
                                <Route exact path={`/party/todo`} component={Todo} />
                                <Route exact path={`/party/guestlist`} component={GuestList} />
                                {/* <Route exact path={`/party/rsvp`} component={Rsvp} /> */}
                                {/* <Route exact path={`/party/inspiration`} component={Inspiration} /> */}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Party;