import React, { Component } from "react";
import { changePassword } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class ChangePassword extends Component {
  state = {
      password: ''
  };
  static propTypes = {
    changePassword: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {password} = this.state;
    const newPassword = {
        password,
      } ;
      this.props.changePassword(newPassword);
}
  render() {
    return (
      <>
        <section className="bg-gray-100 p-6">
          <div className="bg-white h-full rounded-2xl items-center content-center shadow-md p-6 sm:p-2">
            <div className="items-center md:m-6 md:p-6 xs:m-2 xs:p-2">
              <h3 className="text-primary-100 text-2xl content-center text-center mt-5">
                Reset password
              </h3>
              <form className="content-center m-3 p-3 md:m-0.5 flex justify-center h-auto flex-col ">
                <div className="text-md content-center text-center m-2">
                  <h2 className="text-gray-700 xs:text-xs">
                    Enter New password
                  </h2>
                </div>
                <div className="m-3 p-3 flex flex-col justify-center items-center">
                  <input
                    data-testid="input"
                    type="password"
                    placeholder="New password"
                    className="w-1/2 sm:w-full border-primary-100 rounded content-center p-4 m-4 center shadow-md h-10 text-primary-100"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Comfirm password"
                    className="w-1/2 sm:w-full border-primary-100 rounded content-center p-4 m-4 center shadow-md h-10 text-primary-100"
                    required
                  />
                  <button
                    type="submit"
                    value="Submit"
                    name="submit"
                    className="w-1/2 sm:w-full border-primary-100 bg-primary md:hover:bg-purple-500 m-4 rounded content-center center shadow-md h-10 text-white"
                  >
                    Reset your password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  export default connect(mapStateToProps, { changePassword })(ChangePassword);
