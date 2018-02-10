import React from "react";
import "../../assets/css/style.css"
import "./Navbar.css";


class Nav extends React.Component {

  render () {
    const logoImg = require('../../assets/img/logo.svg');
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
        {/* <Link className="navbar-brand" to="/"> */}
        <a href="/home"><img src={logoImg} width="180" height="70"/></a>
        {/* </Link> */}
      </div>
      <ul className="nav navbar-nav mx-auto navbar-right">
      
      {/* <li className={window.location.pathname === "/s" ? "active" : ""}> */}
        
       {/* <Link to="/discover">Sign Up</Link> */} 
        {/* </li> */}
        {/* <li */}
          {/* className={window.location.pathname === "/discover" ? "active" : ""} */}
        
           {/* <Link to="/search">Sign In</Link> */} 
        {/* </li> */}
        
      </ul>
    </div>
    </nav>

    )
  }
}

export default Nav;