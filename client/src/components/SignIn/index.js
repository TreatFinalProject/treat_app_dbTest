import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Wrapper from "../Wrapper";
import Row from "../Row";
import Col from "../Col";
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import "./index.css";
import * as routes from '../../constants/routes';
import { Input, FormBtn } from "../Form";

const SignInPage = ({ history }) =>
<div>
&nbsp;
<Row>
<Col size="sm-3">
</Col>
<Col size="sm-6">
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            &nbsp;
              <span><h3>Sign In for Treat</h3></span>
                <SignInForm history={history} />
                <PasswordForgetLink />
                <SignUpLink />
          </div>
        </div>
      </div>
  </Col>
  <Col size="sm-3">
</Col>
</Row>
  </div>
  
  

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.PROFILE);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

      const gmail = require('../../assets/img/mail.png');
      const passwordImg = require('../../assets/img/password.png');

    return (
      
        
        <form onSubmit={this.onSubmit}>
         &nbsp;
       <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-2">
        
        <img src={gmail} width="29" height="29" alt="github"/>
        </Col>
        <Col size="md-8">
         
         
            <Input
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Adreess"
            
            />
            </Col>
        <Col size="md-1">
        </Col>
      </Row>

         
     
       
        <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-2">
        
        <img src={passwordImg} width="29" height="29" alt="github"/>
        </Col>
        <Col size="md-8">
        
       
        <Input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
       
        
        <button className="btn btn-info btn-xs round" disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      
      </form>
     
     
     
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};