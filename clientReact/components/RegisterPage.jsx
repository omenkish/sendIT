import React, { Component } from 'react';

import RegisterFormContainer from '../components/container/RegisterFormContainer';
import styles from '../assets/css/signin.css';
const RegisterPage = ({history}) => (
  <section id={styles.signin}>
    <div className="container">
        <RegisterFormContainer history={history}/>
        
    </div>
  </section>

);
export default RegisterPage;