import React, { Component } from 'react'; 
import NavBar from './dashboard/NavBar';
import SideBar from './dashboard/SideBar';
import Footer from './dashboard/Footer';
import RolesAndPermissions from './rolesAndPermissions/RolesAndPermissions'
import BookAccommodation from './accommodation/bookAccommodation'


class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <NavBar />
                <RolesAndPermissions />
                <BookAccommodation />
                <SideBar />
                
                <Footer />
            </>
         );
    }
}
 
export default Dashboard;
 