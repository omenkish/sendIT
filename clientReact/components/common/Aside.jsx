import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Aside extends Component {


  render(){
    return (
      <aside id="sidebar">
        <div className="">
          <span>
            <NavLink to="/profile"><i className="fa fa-user"></i> Profile</NavLink>
          </span>
          <span>
            <NavLink to="/create"><i className="fa fa-plus"></i> Create order</NavLink>
          </span>
          <span>
            <NavLink to="/dashboard"><i className="fa fa-plus"></i> My orders</NavLink>
          </span>
          <span>
            <NavLink to="/orders"><i className="fa fa-folder-open"></i> Manage Orders</NavLink>
          </span>
          <span>
            <NavLink to="users"><i className="fa fa-users"></i> All Users</NavLink>
          </span>
          <span>
            <NavLink to="all_orders"><i className="fa fa-folder"></i> All orders</NavLink>
          </span>
          
        </div>
      </aside>
    );
  }
}
export default Aside;
