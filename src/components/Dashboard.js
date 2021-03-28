import React, { Component } from 'react';
import NavBar from './dashboard/NavBar';
import SideBar from './dashboard/SideBar';
import Footer from './dashboard/Footer';
import RolesAndPermissions from './rolesAndPermissions/rolesAndPermissions'


class Dashboard extends Component {
    state = {}
    render() {
        return (
            <>
                <NavBar />
                <RolesAndPermissions />
                <SideBar />
                <Footer />
            </>
        );
    }
}

export default Dashboard;
