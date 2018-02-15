import React from "react";
// link the CSS
import "./Footer.css";
import Col from "../Col";
import Row from "../Row";

class Footer extends React.Component {

  render () {
    const link = require('../../assets/img/linkdin.png');
    const github = require('../../assets/img/github.png');
    const gmail = require('../../assets/img/mail.png');

    return (

  <footer className="footer">
    <div>
          <Row>
              <Col size="sm-7">
                      <h6>About Us</h6>
                            <p>A Pet party planning management application. Caters to a niche market of animal lovers who treat their pets as family. Consolidation of all aspects of party planning. Simplifying the process.</p>
              </Col>
              <Col size="sm-1">
              </Col>
              <Col size="sm-4">
                      <h6>Connect with Us</h6>
                              <p>Kelly Quinn 
                              &ensp;<a href="https://github.com/KellyQuinn213"><img src={github} width="26" height="26" alt="github"/></a>
                              &ensp;<a href="https://www.linkedin.com/in/kelly-quinn-692660a2/"><img src={link} width="31" height="31" alt="github"/></a>
                              &ensp;<img src={gmail} width="29" height="29" alt="github"/></p>
                              <p>Bill King 
                              &ensp;<a href="https://github.com/wpk12345"><img src={github} width="26" height="26" alt="github"/></a>
                              &ensp;<a href="https://www.linkedin.com/in/bill-king-595948109/"><img src={link} width="31" height="31" alt="github"/></a>
                              &ensp;<img src={gmail} width="29" height="29" alt="github"/></p>
                              <p>Yubin Jamora 
                              &ensp;<a href="https://github.com/yubinjamora"><img src={github} width="26" height="26" alt="github"/></a>
                              &ensp;<a href="https://www.linkedin.com/in/yubin-jamora-410b02b5/"><img src={link} width="31" height="31" alt="github"/></a>
                              &ensp;<a href="mailto:yubinlee0726@gmail.com"><img src={gmail} width="29" height="29" alt="github"/></a></p>
              </Col>
          </Row>
                              <span>© 2018 Treat.com All Rights Reserved.</span>
                    

    
    </div>
 
  </footer>
    )
  }
}
export default Footer;