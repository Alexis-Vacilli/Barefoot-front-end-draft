import React, { Component } from 'react';
import { roles } from '../../actions/rolesAndPermissions';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";



class RolesAndPermissions extends Component {
    state = { 
        newRole: '',
        roles: [],
        permissions: [],
     }
     static propTypes = {
        roles: PropTypes.func.isRequired,
        getRoles: PropTypes.array.isRequired,
      };
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onSumbit = (e) => {
        e.preventDefault();
        const {newRole} = this.state;
      }
     componentDidMount(){
        // alert(this.props.getRoles); 
        //  const roles = [...this.props.getRoles];
        //  this.setState({roles})
        const data = this.props.roles();
        console.log(data);
     }
     componentDidUpdate(prevProps, prevState) {
      console.log(prevProps);
      if (prevProps.getRoles !== this.state.roles) {
        this.setState({roles: prevProps.getRoles})
      }
    }
    render() { 
        // const {roles} = this.state;
        return ( 
            <div> 
              <input name = "role" type="text" placeholder="role" onChange= {this.onChange} />
              <button onClick>Add</button>
                <table>
  <thead>
    <tr>
      <td>Roles</td>
      <td>Permissions</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      {this.props.getRoles.map((role) => (
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
  export default connect(mapStateToProps, { roles })(RolesAndPermissions);
  