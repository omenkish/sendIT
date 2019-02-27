import React, { Component } from 'react'
import { BrowserRouter, Route , Switch, Link, NavLink} from 'react-router-dom';
import EditPage from '../components/EditParcel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import RegisterPage from '../components/RegisterPage';
import ServicesPage from '../components/ServicesPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/services" component={ServicesPage} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route path="/register" component={RegisterPage} exact/>
        <Route path="/parcels/edit/:id" component={EditPage} exact/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default AppRouter;