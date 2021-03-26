import React, { Component } from 'react';
import {Link } from 'react-router-dom';



class TestimonialCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="shadow-lg bg-white  flex flex-col justify-around items-center mb-10 md:mb-0">
      <div className="w-2/4  px-4 pt-5">
      </div>
      <div>
        <h3 className="text-blue-500 text-2xl font-semibold">Jane Doe</h3>
        <p>Ceo at Codity</p>
      </div>
      <div className="flex justify-between">
        <p className="px-10 py-5 text-center">
          An endorsement is typically a well-known in An endorsement is typically a well-known
          influencer giving their public support for a brand An endorsement is typically a
          well-known influencer giving their public support for a brandfluencer giving their public
          support for a brand
        </p>
      </div>
      <div className="pb-5 text-blue-600 ">
        <Link to="/">
          <i className="fab fa-twitter pr-2 hover:text-blue-400" />
        </Link>
        <Link to="/">
          <i className="fab fa-facebook pr-2 hover:text-blue-400" />
        </Link>
        <Link to="/">
          <i className="fab fa-linkedin hover:text-blue-400" />
        </Link>
      </div>
    </div>
         );
    }
}
 
export default TestimonialCard;