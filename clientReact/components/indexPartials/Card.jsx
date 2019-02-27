import React from 'react';

const SectionCard = (props) => (
  <div className="box">
    <img src={props.src}/>
    <h3> {props.title}</h3>
    <p> {props.text}</p>
  </div>
);
export default SectionCard;