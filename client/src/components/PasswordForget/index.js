import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from "../Row";
import Col from "../Col";
import { Input, FormBtn } from "../Form";
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import "./index.css";

const PasswordForgetPage = () =>
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
    <h1>Reset Your Password</h1>
    <PasswordForgetForm />
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
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    const passwordImg = require('../../assets/img/password.png');

    return (
      <form onSubmit={this.onSubmit}>
      &nbsp;
       <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-2">
        
        <img src={passwordImg} width="29" height="29" alt="github"/>
        </Col>
        <Col size="md-8">
        
            <Input
        
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </Col>
        <Col size="md-1">
        </Col>
        </Row>
        
        
                    <button className="btn btn-info btn-xs round" disabled={isInvalid} type="submit">
                      Reset My Password
                    </button>
  

              { error && <p>{error.message}</p> }
           
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};