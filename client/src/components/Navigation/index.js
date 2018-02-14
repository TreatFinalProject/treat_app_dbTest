import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Nav.css";
import "../../assets/css/style.css";
import Row from "../Row";




import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const logoImg = require('../../assets/img/logo.svg');

const Navigation = (props, { authUser }) =>

  
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
  

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>

  <ul className="nav navbar-nav navbar-right js-anonymous-header">
  
    <li><a href="/">Home</a>
   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/profile">Profile</a>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/account">Account</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <SignOutButton /></li>
  
  </ul>
  


const NavigationNonAuth = () =>

  
  <ul className="nav navbar-nav navbar-right js-anonymous-header">
  
    <li><a href="/">Home</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/signin">Sign In</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/signup">Sign Up</a></li>
    
  </ul>


export default Navigation;