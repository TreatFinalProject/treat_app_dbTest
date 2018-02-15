import React, { Component } from 'react';
import { Input, FormBtn } from "../Form";
import Row from "../Row";
import Col from "../Col";
import { auth } from '../../firebase';
import "./index.css";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

      const gmail = require('../../assets/img/mail.png');
      const nameImg = require('../../assets/img/name.png');

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
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
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
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
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

export default PasswordChangeForm;