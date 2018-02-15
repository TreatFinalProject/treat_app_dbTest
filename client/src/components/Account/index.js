import React from 'react';
import PropTypes from 'prop-types';
import Row from "../Row";
import Col from "../Col";
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = (props, { authUser }) =>
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
    <h1>Account: {authUser.email}</h1>
    {/* <PasswordForgetForm /> */}
    <PasswordChangeForm />
  </div>
  </div>
  </div>
  </Col>
  <Col size="sm-3">
</Col>
</Row>
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);