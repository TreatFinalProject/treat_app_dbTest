import React from "react";
import Pet from "../../components/Pet";
import Container from "../../components/Container";
import ContainerTwo from "../../components/ContainerTwo";
import Row from "../../components/Row";
import Col from "../../components/Col";
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
         'https://api.unsplash.com/search/photos/?page=3&per_page=9&query=dog&client_id=' + API
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
        const check = require('../../assets/img/check.jpg');
        const light = require('../../assets/img/light.jpg');
        
        return (
            <div>
                <div className="text">
                <img src={petMain} width="100%" height="100%"/>
                <h1 className="titleNameOne"> Your-All-In-One</h1>
                <h1 className="titleNameTwo"> Event Planner
                <Row>
                <button className="btn btn-success btn-lg round">Get Started</button>
                </Row>
                </h1>
                </div>
                <Container style={{ marginTop: 30 }}>
                    &nbsp;
                    
                    <Row>
                    &nbsp;
                    
                        <Col size="md-12">
                        &nbsp;
                        <h3 className="text-center">Services for every plan</h3>
                        </Col>
                        &nbsp;
                    </Row>
                    
                    &nbsp;
                    
                    <Row>
                        <Col size="xs-12 sm-6">
                            <Row>
                            <Col size="md-1">
                                </Col>
                                <Col size="md-2">
                                    <img src={RSVPimg} width="50" height="35"/>
                                </Col>
                                <Col size="md-7">
                                    <h6 className="strong text-left"> R S V P</h6>
                                        <Row>
                                            <Col size="md-12">
                                                <p>Send your invitations to friends.</p>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                            
                       
                   
                    &nbsp;
                    
                            <Row>
                                
                                <Col size="md-1">
                                </Col>
                                <Col size="md-2">
                                    <img src={GuestImg} width="50" height="40"/>
                                </Col>
                                <Col size="md-9">
                                    <h6 className="strong text-left"> Guest List</h6>
                                        <Row>
                                            <Col size="md-12">
                                                <p>Don't miss any of your baby's best friends</p>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                            &nbsp;
                            <Row>
                            <Col size="md-1">
                                </Col>
                                <Col size="md-2">
                                    <img src={toDoimg} width="55" height="40"/>   
                                </Col>
                                <Col size="md-9">
                                    <h6 className="strong text-left"> To Do List</h6>
                                        <Row>
                                            <Col size="md-12">
                                                <p>Prioritize your list for the day.</p>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                    
                    &nbsp;
                            <Row>
                            <Col size="md-1">
                                </Col>
                                <Col size="md-2">
                                    <img src={giftimg} width="50" height="35"/> 
                                </Col>
                                <Col size="md-9">
                                    <h6 className="strong text-left"> Gift</h6>
                                        <Row>
                                            <Col size="md-12">
                                                <p>Pefect if your friends can help you out for choosing your pet's gifts.</p>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                    </Col>

                    <Col size="xs-12 sm-6 ">
                        <div className="card">
                            <div className="card-header text-center">
                                
                            <img src={light} width="15" height="20"/>&ensp;  The 4 Reasons to Throw Your Dog a Birthday Party
                            </div>
                            &nbsp;
                            
                             <p className="card-text">&ensp;&ensp; <img src={check} width="12" height="12"/> &ensp;Because your best friend deserves a celebration!</p>
                             <p className="card-text">&ensp;&ensp; <img src={check} width="12" height="12"/> &ensp;Doggy playdates are good for both you and your pet! </p>
                             <p className="card-text">&ensp;&ensp; <img src={check} width="12" height="12"/> &ensp;Because one dog year is equivalent to 7 human years. 
                             &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Every one of your buddy’s birthdays should be 7x as 
                             &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;celebrated!</p>
                             <p className="card-text">&ensp;&ensp; <img src={check} width="12" height="12"/> &ensp;Because a party where sniffing butts is totally ok rules!</p>
                                        <a href="#" className="btn btn-success btn-sm">Go somewhere</a>
                            </div>
                       
                    </Col>
                    </Row>
                    <Row>    
                    &nbsp;
                    
                    </Row>   
                    &nbsp;
                
                </Container>
                &nbsp;
           
                <ContainerTwo>
                
                <h3 className="text-center">Our community of best event planners</h3>
                <p className="text-center"> Over a million and counting...</p>
                
                        <div className="main-content">
                        &nbsp;  
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