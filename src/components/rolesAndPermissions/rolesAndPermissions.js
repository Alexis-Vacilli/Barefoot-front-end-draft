import React, { Component } from 'react';
import { roles, createRole } from '../../actions/rolesAndPermissions';
import  { connect } from 'react-redux';
import PropTypes from "prop-types"; 
import {MdEdit, MdDelete} from 'react-icons/md';
import {FaChevronRight, FaPlus} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';


class RolesAndPermissions extends Component {
    state = { 
        name: '',
        roles: [],
        permissions: [],
        initialRoleState: false
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
//             <div> 
//               <input name = "name" type="text" placeholder="role" value={name} onChange= {this.onChange} />
//               <button onClick={this.onSubmit}>Add</button>
//                 <table>
//   <thead>
//     <tr>
//       <td>Roles</td>
//       <td>Permissions</td>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       {roles.map((role) => (
//           <td key={role.id}>{role.name}</td>
//       ))}
//       <td></td>
//     </tr>
//   </tbody>
// </table>
//             </div> 
          <div>
          <ul className="md:flex mt-3 ml-5 p-1  border borders w-3/5">
            <li className="mt-1 mr-1 ml-1 color"><a href=""><AiFillHome /></a></li>
            <li className="mt-1 mr-1 color"><a href=""><FaChevronRight /></a></li>
            <li className="mr-1 color"><a>Roles</a></li>
            <li className="mt-1 mr-1 color"><a href=""><FaChevronRight /></a></li>
            <li className="color"><a>Permissions</a></li>
          </ul>
          <div className="md:grid grid-cols-3 background border border-gray-700 mt-4 w-3/5 ml-5">
            <div className="border-r-2 border-gray-500">
              <h4 className="text-xl p-1 border-b border-gray-700 font-bold">Roles</h4>
              <div>
                <button className="flex pt-2 pl-8 margin">
                  <span className="mt-1 mr-2 text-blue-500"><FaPlus /></span>
                  <span className="text-blue-500" onClick={this.onSubmit}>Add roles</span>
                </button>
                <ul className="pl-8 pb-5">
                {roles.map((role) => (
                    <li key={role.id} className="flex items-center justify-between margin" >
                      <div className="flex">
                        <span>{role.name}</span>
                        <MdEdit className="mt-1 ml-2"/>
                      </div>
                      <FaChevronRight />
                    </li>
                ))}
                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <h4 className="text-xl p-1 border-b border-gray-700 font-bold">Permissions</h4>
              <div>
                <button className="flex pt-2 pl-8 margin">
                  <span className="mt-1 mr-1 text-blue-500"><FaPlus /></span>
                  <span className="text-blue-500">Add permissions</span>
                </button>
                <ul className="pl-8 pb-5">
                  <li className="flex margin justify-between">
                    <span>View their direct reports</span>
                    <div className="flex mt-1 mr-2">
                      <span className="mr-1 text-gray-700"><MdEdit /></span>
                      <span className="text-gray-700"><MdDelete /></span>
                    </div>
                  </li>
                  <li className="flex margin justify-between">
                    <span>View their direct reports</span>
                    <div className="flex mt-1 mr-2">
                      <span className="mr-1 text-gray-700"><MdEdit /></span>
                      <span className="text-gray-700"><MdDelete /></span>
                    </div>
                  </li>
                  <li className="flex margin justify-between">
                    <span>View their direct reports</span>
                    <div className="flex mt-1 mr-2">
                      <span className="mr-1 text-gray-700"><MdEdit /></span>
                      <span className="text-gray-700"><MdDelete /></span>
                    </div>
                  </li>
                  <li className="flex margin justify-between">
                    <span>View their direct reports</span>
                    <div className="flex mt-1 mr-2">
                      <span className="mr-1 text-gray-700"><MdEdit /></span>
                      <span className="text-gray-700"><MdDelete /></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
         );
    }
}
const mapStateToProps = (state) => ({
    getRoles: state.roles.roles,
  });
  export default connect(mapStateToProps, { roles, createRole })(RolesAndPermissions);
