import React, { Component } from 'react';
import DropMenu from './landingPage/DropMenu';
import Footer from './landingPage/Footer';
//import HotelCard from './landingPage/HotelCard'
import NavBar from './landingPage/NavBar';
//import TestimonialCard from './landingPage/TestimonialCard';
import Testimonials from './landingPage/Testimonials';
import TopHotels from './landingPage/TopHotels';
import VideoCard from './landingPage/VideoCard';



class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavBar  />
            <DropMenu  />
            <VideoCard />
            <TopHotels />
            <Testimonials />
            <Footer />
          </>
         );
    }
}
 
export default Index;