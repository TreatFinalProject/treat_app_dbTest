import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import Row from "../Row";
import Col from "../Col";

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import { Input, FormBtn } from "../Form";
import "./index.css";

const SignUpPage = ({ history }) =>
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
      <span><h3>Sign Up for Treat</h3></span>
    <SignUpForm history={history} />
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
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

      const gmail = require('../../assets/img/mail.png');
      const passwordImg = require('../../assets/img/password.png');
      const nameImg = require('../../assets/img/name.png');
      const lockpasswordImg = require('../../assets/img/lockpassword.svg');


    return (
     
      <form onSubmit={this.onSubmit}>
      &nbsp;
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-2">
        
            <img src={nameImg} width="28" height="28" alt="github"/>
        </Col>
        <Col size="md-8">
            <Input
                  value={username}
                  onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                  type="text"
                  placeholder="Full Name"
            />
        </Col>
        <Col size="md-1">
        </Col>
      </Row>

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
                  placeholder="Email Address"
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
                value={passwordOne}
                onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                type="password"
                placeholder="Password"
            />
          </Col>
        <Col size="md-1">
        </Col>
      </Row>

      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-2">
        
        <img src={lockpasswordImg} width="29" height="29" alt="github"/>
        </Col>
        <Col size="md-8">
       
              <Input
                    value={passwordTwo}
                    onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
        <button className="btn btn-info btn-xs round" disabled={isInvalid}   
       
 type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};