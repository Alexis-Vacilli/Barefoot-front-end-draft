import React, { Component } from 'react'


class Accommodation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-gray-100 w-full m-0">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Check in Date:</label>
                            <input type="date" name="checkinDate" className="col-span-2 row-start-1 md:w-4/5 md:col-span-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"/></div>
                        

                        <div className="form-column">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Check Out Date:</label>
                            <input type="date" name="checkoutDate" className="col-span-2 row-start-1 md:w-4/5 md:col-span-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"/>
                        </div>
                        <button type="submit" onClick={this.onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
                </button>
                </div>                            
            
                </form>
            </div>
         );
    }
}

 
export default Accommodation;