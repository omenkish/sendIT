import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../UI/assets/css/index.css';
class Navbar extends Component{
  render(){
    return (
      <header>
        <div id="branding">
          <h1><a href="#" className="brand"><span className="highlight">Send</span>IT <i className="fa fa-shipping-fast"></i></a></h1>
        </div>
        <nav>
        <ul id = "navbar">
          <li className="current"><a href="index.html">Home <i className="fa fa-home"></i></a></li>
          <li><a href="./services.html">Services <i className="fa fa-book-open"></i></a></li>
        </ul>
      </nav>
      </header>
    );
  }
}
export default Navbar;