import React from "react";
import { Router, Route } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Images from "../../components/Images";
import Todo from "./Todo";
import Jumbotron from "../../components/Jumbotron"
import GuestList from "./GuestList";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { firebase } from '../../firebase';
import withAuthorization from '../../components/Session/withAuthorization';

// import Rsvp from "./Rsvp";
// import Inspiration from "./Inspiration";


class Party extends React.Component {

    constructor(props, { authUser }) {
        super(props);
        this.state = {
            events: [],
            event: {},
            email: "",
            unique: []
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            this.setState({ "email": authUser.email })
            this.loadEvents();
        })
    }

    // Loads all books  and sets them to this.state.books
    loadEvents = user => {
        API.getEvents(this.state.email)
            .then(res => this.setState({ events: res.data }))
            .catch(err => console.log(err));
    };

    // When this component mounts, grab the event with the _id of this.props.match.params.id
    componentwillMount() {
        API.getEvent(this.props.match.params.id)
            .then(res => this.setState({ event: res.data }))
            .catch(err => console.log(err));
    };

    render() {

        let party = ""
        let host = ""
        let local = ""
        let date = ""

    for (var i = 0; i < this.state.events.length; i++) {
        if (this.state.events.length > 0) {
            party = this.state.events[i].eventName
        }
        if (this.state.events.length > 0) {
            host = this.state.events[i].eventHost
        }
        if (this.state.events.length > 0) {
            local = this.state.events[i].location
        }
        if (this.state.events.length > 0) {
            date = this.state.events[i].date
        }
    }
    
    return(
        
            <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    {/* Dash Column */}
                    {/* <Col size="md-3">
                            <h1 className="text-left">Dashboard</h1>
                            <ul className="list-group list-group-flush">
                                <a href="/party/todo" className="list-group-item list-group-item-action">To Do</a>
                                <a href="/party/guestlist" className="list-group-item list-group-item-action">Guest List</a>
                            </ul>
                        </Col> */}
                    {/* Event Column */}
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">{party}</h1>
                        </Jumbotron>
                        {/* Info Row */}
                        <Row>
                            <Col size="md-3">
                                <Images />
                                <div className="petPic"></div>
                            </Col>
                            <Col size="md-9">
                                <h2> Date: {date}</h2>
                                <h2> Location: {local}</h2>
                                <h2> Host: {host}</h2>
                            </Col>

                        </Row>
                        {/* <Row>
                                <Col size="md-5">
                                    {Todo}
                                </Col>
                            
                                <Col size="md-5">
                                    {GuestList}
                                </Col>
                            </Row> */}

                        {/* Changing Dash Component Row */}
                        {/* <Row>
                                <Route exact path={"/party/todo"} component={Todo} />
                                <Route exact path={`/party/guestlist`} component={GuestList} />
                            </Row> */}
                    </Col>
                </Row>
            </Container>
            </div>
        );
}
}
export default Party;