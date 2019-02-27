import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="">
      <div id="branding">
        <h1><NavLink to="/" className="brand"><span className="highlight">Send</span>IT <i className="fa fa-shipping-fast"></i></NavLink></h1>
      </div>
      <nav>
        <ul id = "navbar">
          <li ><NavLink to="/" activeClassName="current" exact>Home <i className="fa fa-home"></i></NavLink></li>
          <li ><NavLink to="/services" activeClassName="current">Services <i className="fa fa-book-open"></i></NavLink></li>
          <li ><NavLink to="/login" activeClassName="current">Login <i className="fa fa-sign-in-alt"></i></NavLink></li>
          <li ><NavLink to="/register" activeClassName="current">Register <i className="fa fa-user-plus"></i></NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;