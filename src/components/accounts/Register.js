import React, { Component } from 'react';
import {register} from '../../actions/auth';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';


class Register extends Component {
    state = { 
        firstName: '',
        lastName: '',
        email: '',
        password: '' 
    };
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    onSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, email, password} = this.state;
        const newUser = {
            firstName,
            lastName,
            email,
            password,
          } ;
          this.props.register(newUser);
    }
    render() { 
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
          }
        const {firstName, lastName, email, password} = this.state;
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
                  name="firstName"
                  type="text"
                  className="col-span-2 row-start-1 md:w-4/5 md:col-span-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"
                  onChange= {this.onChange}
                />
                <input
                  name="lastName"
                  type="text"
                  className="col-span-2 md:col-span-1 md:row-start-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"
                  onChange= {this.onChange}
                />
                <input
                  data-testid="email"
                  id="email"
                  name="email"
                  type="email"
                  className="col-span-2  border-primary-100 rounded p-4 my-4  shadow-md h-10 text-primary-100"
                  onChange= {this.onChange}
                />
                <input
                  name="password"
                  type="password"
                  className="col-span-2  border-primary-100 rounded p-4 my-4 shadow-md h-10 text-primary-100"
                  onChange= {this.onChange}
                />
                <button
                    type="submit" 
                    onClick={this.onSubmit}
                >
                    Register
                </button>
              </form>
              <p>Or use your social accounts to register</p>
              <p>
                Already have an account?{' '}
                <a className="text-blue-500 text-sm font-medium" href="/login">
                  Sign in
                </a>
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
  export default connect(mapStateToProps, { register })(Register);
  
