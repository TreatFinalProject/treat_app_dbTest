import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends React.Component {
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
    render() {
        console.log(this.state.events)


        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>What Event Should I Plan?</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;