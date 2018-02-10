import React from 'react';
import Row from "../Row";
import Col from "../Col";


const Img = props => (
<li className="img-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Img;