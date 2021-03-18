import React, { Component } from 'react';
import { roles } from '../../actions/rolesAndPermissions/rolesAndPermissions';
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
     }
    render() { 
        const {roles} = this.state;
        return ( 
            <div>
                <table>
  <tr>
    <th>Roles</th>
    <th>Permissions</th>
  </tr>
  
  <tr>
    {roles.map((role) => (
        <td>{role.name}</td>
    ))}
    <td>Creating accomodations and locations</td>
  </tr>
</table>
            </div>
         );
    }
}
const mapStateToProps = (state) => ({
    getRoles: state.roles.roles,
  });
  export default connect(mapStateToProps, { roles })(RolesAndPermissions);
  