import React, { Component } from 'react'
import { Router, Route , Switch, Link, NavLink} from 'react-router-dom';
import CreateParcelPage from './components/CreateParcelPage';
import DashboardPage from './components/DashboardPage';
import EditPage from './components/EditParcelPage';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import ProfilePage from './components/ProfilePage';
import RegisterPage from './components/RegisterPage';
import ServicesPage from './components/ServicesPage';
import { history } from '../clientReact/store/store'

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/services" component={ServicesPage} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route path="/register" component={RegisterPage} exact/>
        <Route path="/dashboard" component={DashboardPage} exact/>
        <Route path="/create" component={CreateParcelPage} exact/>
        <Route path="/profile" component={DashboardPage} exact/>
        <Route path="/orders" component={DashboardPage} exact/>
        <Route path="/users" component={DashboardPage} exact/>
        <Route path="/all_orders" component={DashboardPage} exact/>
        <Route path="/parcels/edit/:id" component={DashboardPage} exact/>
        <Route path="/users/edit/:id" component={DashboardPage} exact/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default AppRouter;