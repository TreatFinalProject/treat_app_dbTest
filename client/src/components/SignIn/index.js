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

    return (
      
        
        <form onSubmit={this.onSubmit}>
       
         
            Email
            <Input
              value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
            />
         
     
        &nbsp;
        Password
        <Input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
       
        
        <button disabled={isInvalid} type="submit">
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