import React from "react";
import Pet from "../../components/Pet";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import ContainerTwo from "../../components/ContainerTwo";
import "./Home.css";
import Request from 'superagent';
import ImgList from "../../components/ImgList";
import axios from 'axios';



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [],
            loadingState: true
            
        };
        
    }

    componentDidMount(){
       
            this.performSearch();
        }
     

    performSearch = (query = 'dog') => {
    const API = 'dbadf4601c1e3ce399dce13d570bacf17a080a81fd34dad742b62fe6959b462d';
    axios.get (
         'https://api.unsplash.com/search/photos/?page=3&per_page=6&query=dog&client_id=' + API
     )
     .then(data => {
         this.setState({ imgs:data.data.results,
            loadingState: false 
            });
     })
     .catch(err => {
         console.log('Error happened during fetching!', err);
     });
 };
    render() {
        const RSVPimg = require('../../assets/img/RSVP.jpg');
        const GuestImg = require('../../assets/img/GuestList.jpg');
        const toDoimg = require('../../assets/img/ToDo.jpg');
        const giftimg = require('../../assets/img/gift.jpg');
        const petMain = require('../../assets/img/dogedit.jpg');
        
        return (
            <div>
                <img src={petMain} width="100%" height="100%"/>
                <h1 className="titleNameOne"> Your-All-In-One</h1>
                <h1 className="titleNameTwo"> Event Planner</h1>
                <Container style={{ marginTop: 30 }}>
                    &nbsp;
                    <Row>
                        <Col size="md-12">
                        <h3 className="text-center">Services for every plan</h3>
                        </Col>
                    </Row>
                    
                    &nbsp;
                    
                    <Row>
            
                            <Col size="md-1">
                            </Col>
                            <Col size="md-1">
                                <img src={RSVPimg} width="50" height="35"/>
                            </Col>
                            <Col size="md-7">
                                <h6 className="strong text-left"> R S V P</h6>
                                <Row>
                                    <Col size="md-7">
                                        <p>Send your invitations to friends.</p>
                                    </Col>
                                </Row>
                            </Col>
                       
                    </Row>
                    &nbsp;
                    
                    <Row>
                        <Col size="md-1">
                        </Col>

                        <Col size="md-1">
                            <img src={GuestImg} width="50" height="40"/>
                        </Col>
                        <Col size="md-7">
                        <h6 className="strong text-left"> Guest List</h6>
                            <Row>
                                <Col size="md-7">
                                <p>Share your best moment with your closet friends.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-1">
                        </Col>
                        <Col size="md-1">
                            <img src={toDoimg} width="55" height="40"/>   
                        </Col>
                        <Col size="md-7">
                        <h6 className="strong text-left"> To Do List</h6>
                            <Row>
                                <Col size="md-7">
                                <p>Prioritize your list for the day.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    &nbsp;
                    <Row>
                        <Col size="md-1">
                        </Col>
                        <Col size="md-1">
                            <img src={giftimg} width="50" height="35"/> 
                        </Col>
                        <Col size="md-7">
                        <h6 className="strong text-left"> Gift</h6>
                            <Row>
                                <Col size="md-7">
                                <p>Pefect if your friends can help you out for choosing your pet's gifts.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row>    
                    &nbsp;
                        <h7 className="text-center"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h7>
                    </Row>   
                    &nbsp; &nbsp;
                
                </Container>
        
           
                <ContainerTwo>
                    
                        <div className="main-content">
                            
                        {this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
                               
                        </div>
                
                   
                </ContainerTwo>
            
        </div>    
         
        );
    }
}
export default Home;