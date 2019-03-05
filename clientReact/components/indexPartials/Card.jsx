import React from 'react';
import styles from '../../assets/css/index.css';
const SectionCard = (props) => (
  <div className={styles.box}>
    <img src={props.src}/>
    <h3> {props.title}</h3>
    <p> {props.text}</p>
  </div>
);
export default SectionCard;