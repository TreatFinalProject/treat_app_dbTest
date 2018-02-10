import React from "react";
import PropTypes from 'prop-types';

class ContainerTwo extends React.Component {

  render () {
    const { fluid, children } = this.props

    return (
      <div className={`container${fluid ? "-fluid" : ""}`} >
        {children}
      </div>
    );
  }

}

ContainerTwo.props = {
  fluid: PropTypes.string,
  children: PropTypes.node
}

export default ContainerTwo;