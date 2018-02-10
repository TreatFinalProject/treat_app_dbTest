import React from "react";
import "../../assets/css/style.css"
import "./Navbar.css";


class Nav extends React.Component {

  render () {
    const logoImg = require('../../assets/img/logo.svg');
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
        <a href="/home"><img src={logoImg} width="180" height="70"/></a>
      </div>
      
      
    </div> 
    </nav>
    </div>

    )
  }
}

export default Nav;