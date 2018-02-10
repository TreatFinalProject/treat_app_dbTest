import React from "react";
import PropTypes from 'prop-types';
import "./Pet.css";

class Pet extends React.Component {

  render () {
    const { backgroundImage, children } = this.props

    return (
      <div
        className="pet text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    );
  }
}

Pet.props = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node
}

export default Pet;