import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { isLoggedIn, decodeToken, logout } from '../../services/authService';
import styles from '../../assets/css/index.css';

const Header = () => {

    return (
      <header>
        <div>
          <div id={styles.branding}>
            <NavLink to="/" className={styles.brand}><h1><span className={styles.highlight}>Send</span>IT <i className="fa fa-shipping-fast"></i></h1></NavLink>
          </div>
          <nav>
            <ul id = {styles.navbar}>
              <li ><NavLink to="/" activeClassName={styles.current} exact>Home <i className="fa fa-home"></i></NavLink></li>
              <li ><NavLink to="/services" activeClassName={styles.current}>Services <i className="fa fa-book-open"></i></NavLink></li>
              {isLoggedIn() && 
              <Fragment>
                <li ><NavLink to="/dashboard" activeClassName={styles.current} exact>Dashboard <i className="fa fa-lock"></i></NavLink></li>
                <li style={{cursor: 'pointer'}} onClick={() => logout() }>Logout <i className="fa fa-power-off"></i></li>
              </Fragment>
              
              }
              
              {!isLoggedIn() && 
                <Fragment>
                  <li ><NavLink to="/login" activeClassName={styles.current}>Login <i className="fa fa-sign-in-alt"></i></NavLink></li>
                  <li ><NavLink to="/register" activeClassName={styles.current}>Register <i className="fa fa-user-plus"></i></NavLink></li>
                </Fragment>
              }

            </ul>
          </nav>
        </div>
      </header>
    );
} 
  
 export default Header;
