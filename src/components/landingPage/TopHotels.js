import React, { Component } from 'react';
import {Link } from 'react-router-dom';
//import HotelCard from './HotelCard';

class TopHotels extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="h-3/5 md:pt-40 pt-20 md:px-20 px-5">
    <div>
      <p className="md:text-4xl text-2xl text-blue-600 font-bold pb-5">SEE</p>
      <p className="md:text-3xl text-xl font-bold pb-10">TOP RANKED HOTELS</p>
    </div>
​
    <div className="md:grid grid-cols-3 gap-10">
    </div>
    <div className="flex justify-center py-20">
      <Link
        to="/#"
        className="bg-blue-600 px-14 py-2 text-gray-50 hover:bg-purple-600  hover:text-gray-100 transiction duration-300 ease-in-out"
      >
        Discover More &gt; &gt;
      </Link>
    </div>
  </div>
         );
    }
}
 
export default TopHotels;