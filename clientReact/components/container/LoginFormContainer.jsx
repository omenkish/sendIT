import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postRequest } from '../../actions/authAction';
import Input from '../common/Input';
import '../../assets/css/signin.css';

class FormContainer extends Component {
    state = {
      email: "",
      password: "",
      error: ''
    };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postRequest(this.state, 'auth/login', {type: 'LOGIN_USER'}, {type:'LOGIN_USER_FAIL'});
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.errorMessage) {
      this.setState({error: nextProps.auth.errorMessage })
    }
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard')
}
  }
  render() {
    const { email, password, error } = this.state;
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <div><h1> Sign In <i className="fa fa-arrow-alt-circle-right"></i></h1></div>
          <div id="message">{this.state.error}</div>
          <Input 
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
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
          <button type="submit"> Login</button>
          <span id="remember">
            <Input type="checkbox" defaultChecked id="Remember" /> Remember me
          </span>
        </div>
        <div className="bottom-form-area">
          <span id="reg">Not yet registered? <Link to="/register">Sign up</Link></span>
          <span className="psw"> <Link to="#">Forgot password?</Link></span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
 });
 
 export default connect(mapStateToProps, { postRequest })(withRouter(FormContainer));