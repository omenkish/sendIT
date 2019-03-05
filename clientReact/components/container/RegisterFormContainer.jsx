import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import { postRequest } from '../../actions/authAction';

class RegisterFormContainer extends Component {
  
   state = {
      firstname: '',
      lastname: '',
      othernames: '',
      phone: '',
      email: '',
      password: '',
      error: ''
    };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value});
  }
  handleSubmit =  async (event) => {
    event.preventDefault();
    const signupData = this.state;
    this.props.postRequest(signupData, '/auth/signup', {type: 'SIGNUP_USER'}, {type:'SIGNUP_USER_FAIL'});
  }

  componentDidUpdate(prevProps, prevState) {
    
    if(prevProps.auth !== this.props.auth){
      if(this.props.auth.errorMessage) {
        this.setState({error: this.props.auth.errorMessage })
      }
      if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
      }
    }
  }
  render() {
    const { firstname, lastname:lastName, othernames:otherNames, phone, email, password, error } = this.state;
    return (
      <form id="create" onSubmit={this.handleSubmit}>
         <h1>Create Account <i className="fa fa-plus-circle"></i> </h1>
            {error && <div id="message">{error}</div>}
          <Input 
            type="text"
            id="firstname"
            value={firstname}
            placeholder="Enter your firstname"
            handleChange={this.handleChange}
            required
          />
          <Input 
            type="text"
            id="lastname"
            value={lastName}
            placeholder="Enter your lastname"
            handleChange={this.handleChange}
            required
          />
          <Input 
            type="text"
            id="othernames"
            value={otherNames}
            placeholder="Enter your other names"
            handleChange={this.handleChange}
            required={false}
          />
          <Input 
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            handleChange={this.handleChange}
            required
          />
          <Input 
            type="tel"
            id="phone"
            value={phone}
            placeholder="Enter your phone number"
            handleChange={this.handleChange}
            required
          />
          <Input 
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            handleChange={this.handleChange}
            required
          />

          <div>
            <button type="submit"> Create Account</button><span className="spa"> Already a member? <Link to="/login">Sign in</Link></span>
          </div>
      </form>
    );
  }
}
RegisterFormContainer.propTypes = {
  postRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
 });

 export default connect(mapStateToProps, { postRequest })(RegisterFormContainer);