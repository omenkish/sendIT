import React, { Component } from 'react';
import Aside from './common/Aside';
import style from '../assets/css/style.css';
class DashboardPage extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <section id={style.left}>
          <Aside/>
        </section>
      </div>
    );
  }
} 
export default DashboardPage;