import React, { Component } from 'react';


class HotelCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
    <p className="text-center py-4">The Lion Hotel, North Adelaide, South Australia</p>
    <ul className="flex justify-center pb-5">
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
    </ul>
  </div>
         );
    }
}
 
export default HotelCard;