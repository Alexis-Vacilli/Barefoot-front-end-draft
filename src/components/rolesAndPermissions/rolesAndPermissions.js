import React, { Component } from 'react';
import { roles } from '../../actions/rolesAndPermissions';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";



class RolesAndPermissions extends Component {
    state = { 
        roles: [],
        permissions: [],
     }
     static propTypes = {
        roles: PropTypes.func.isRequired,
        getRoles: PropTypes.array.isRequired,
      };
     componentDidMount(){
         const roles = [...this.props.getRoles];
         this.setState({roles})
        this.props.roles();
     }
    render() { 
        const {roles} = this.state;
        // alert('3333333333333333333',roles);
        console.log('****88888888888888**********888888888*********888888', roles)
        return ( 
            <div>
                <table>
  <thead>
    <tr>
      <td>Roles</td>
      <td>Permissions</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      {roles.map((role) => (
          <td>{role.name}</td>
      ))}
      <td></td>
    </tr>
  </tbody>
</table>
            </div>
         );
    }
}
const mapStateToProps = (state) => ({
    getRoles: state.roles.roles,
  });
  export default connect(mapStateToProps, { roles })(RolesAndPermissions);
