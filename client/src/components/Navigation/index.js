import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Nav.css";
import "../../assets/css/style.css"


import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const logoImg = require('../../assets/img/logo.svg');

const Navigation = (props, { authUser }) =>

  <div>
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        
        <a href="/"><img src={logoImg} width="180" height="70"/></a>
        
      </div>
    { authUser
        ? <NavigationAuth /> 
        : <NavigationNonAuth />
    }
    </div>
    
    </nav>;
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home Page</Link></li>
    <li><Link to={routes.PROFILE}>Dashboard</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>

    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;