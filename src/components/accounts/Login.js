import React, { Component } from 'react';
import {login} from '../../actions/auth';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
    state = { 
        email: '',
        password: '' 
    };
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    onSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const loginUser = {
            email,
            password,
          } ;
          this.props.login(loginUser);
    }
    render() { 
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
          }
        return ( 
            <div className="bg-gray-100 w-full m-0">
        <div className="grid grid-cols-1 md:grid-cols-3 card hover:shadow-lg w-3/4 mx-auto">
          <div className="md:w-4/6 md:col-span-2 py-4 mx-auto">
            <h1 className="text-gray-600 font-medium text-lg mx-4">Get started for free</h1>
            <p className="text-blue-500 mx-4">Over 1000 campanies trust Barefoot-nomad worldwide</p>
            <div>
              <form
                data-testid="form"
                className="grid mx-0 mt-4 md:grid-cols-2 gap-1 w-full"
              >
                <input
                  data-testid="email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="col-span-2  border-primary-100 rounded p-4 my-4  shadow-md h-10 text-primary-100"
                  onChange= {this.onChange}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="col-span-2  border-primary-100 rounded p-4 my-4 shadow-md h-10 text-primary-100"
                  onChange= {this.onChange}
                />
                <button
                    type="submit" 
                    onClick={this.onSubmit}
                >
                    Login
                </button>
              </form>
              <p>Or use your social accounts to register</p>
              <p>
        Don't have an account?<Link to="/register">Register</Link>
              </p>
              <p>
        Forgot password?<Link to="/resetPassword">Reset Password</Link>
              </p>
            </div>
          </div>
        </div>
    </div>
         );
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  export default connect(mapStateToProps, { login })(Login);
  
