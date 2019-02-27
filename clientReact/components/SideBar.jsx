import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <aside id="sidebar">
    <div class="">
      <span>
        <NavLink to="/profile"><i className="fa fa-user" exact></i> Profile</NavLink>
      </span>
      <span>
        <NavLink to="/dashboard"><i className="fa fa-plus"></i> Create order</NavLink>
      </span>
      <span>
        <NavLink to="/orders"><i className="fa fa-folder-open"></i> Manage Orders</NavLink>
      </span>
      <span>
        <NavLink to="/users"><i className="fa fa-users"></i> All Users</NavLink>
      </span>
      <span>
        <NavLink to="/all_orders"><i className="fa fa-folder"></i> All orders</NavLink>
      </span>
      <span>
        <NavLink to="#" onclick="logout()"><i className="fa fa-power-off"></i> Logout</NavLink>
      </span>
      
    </div>
  </aside>
);

export default SideBar;