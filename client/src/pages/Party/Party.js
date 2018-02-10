import React from "react";
import { Router, Route } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Images from "../../components/Images";
import Todo from "./Todo";
import GuestList from "./GuestList";
// import Rsvp from "./Rsvp";
// import Inspiration from "./Inspiration";


class Party extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container style={{ marginTop: 30 }}>
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
                            <h1 className="text-center">Event Name</h1>
                            {/* Info Row */}
                            <Row>
                                <Col size="md-5">
                                <h2> Date: </h2>
                                <h2> Location: </h2>
                                <h2> Host: </h2>
                                </Col>
                                <Col size="md-7">
                                <Images />
                                <div className="petPic"></div>
                                </Col>
                            </Row>
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