import React, { Component } from 'react';
import { roles, createRole } from '../../actions/rolesAndPermissions';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";



class RolesAndPermissions extends Component {
    state = { 
        name: '',
        roles: [],
        permissions: [],
     }
     static propTypes = {
        roles: PropTypes.func.isRequired,
        getRoles: PropTypes.array.isRequired,
        createRole: PropTypes.func.isRequired
      };
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onSubmit = (e) => {
        e.preventDefault();
        this.props.createRole(this.state.name);
      }
      componentWillReceiveProps({ getRoles }) {
        const roles = [...getRoles];
        this.setState({roles})
      }

     componentDidMount(){
        this.props.roles();
     }

    render() { 
        const {roles, name } = this.state;
        console.log('New Role', roles)
        return ( 
            <div> 
              <input name = "name" type="text" placeholder="role" value={name} onChange= {this.onChange} />
              <button onClick={this.onSubmit}>Add</button>
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
          <td key={role.id}>{role.name}</td>
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
  export default connect(mapStateToProps, { roles, createRole })(RolesAndPermissions);
