import Facilities from './facilities';

const BookAccommodation = ({ bookedAccommodations, bkdAcc }) =>{
    const shiftTab = (id) =>{
        const mainIds = ['mainAll','mainAvailable','mainBooked'];

        for(let c = 0; c<=2;c++){
            try{
             document.getElementById(`${mainIds[c]}`).style.display="none";
             document.getElementById(mainIds[id]).style.display="grid";
            }catch(e){

            }
        }
 

    }

    shiftTab(0)
    console.log(bookedAccommodations);

    return (
        <div>
            <div className="w-full bg-gray-100 shadow-md px-2 py-4">
                <p id="targ" className="text-xl font-bold">Accommodation</p>
            </div>
            <div>
            <div id="navbar" className="flex space-x-4 w-full items-center mt-4" onClick={(e)=>{
                document.getElementById(e.target.id).style.borderBottom="3px #000"
                switch (e.target.id){
                    case 'nav-all':
                        shiftTab(0);
                        break;
                    case "nav-available":
                        shiftTab(1);
                    break;
                    case "nav-booked":
                        shiftTab(2);
                    break;
                    default:
                }
                document.getElementById(e.target.id).style.display="block";
            }}>
                <p type="navigator" id="nav-all" className="text-blue-700 uppercase font-bold focus:border focus:border-b focus:border-blue-700 ">AVAILABLE</p>
                <p id="nav-available" className="text-blue-700 uppercase font-bold ">BOOKED</p>
        
                </div>
                <div>
                <div id="mainAll" className="space-x-4">
                {
                   bookedAccommodations.map((accommodation)=>(
                    
                    <div id={`${accommodation.id}`} className="flex space-x-4 rounded-xl shadow-md  mt-2 ml-4">
                        <img src={`${accommodation.image}`} onError={e=>e.currentTarget.src = 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'} className="w-1/2" alt="hotel"></img>
                        <div className="py-4">
                            <p className="text-xl font-bold text-gray-600 uppercase">{accommodation.name}</p>
                            <p className="text-sm font-thin text-gray-500">Capacity: {accommodation.capacity}</p>
                            <p className="text-sm font-thin text-gray-500">Available Rooms: {accommodation.roomsLeft}</p>
                            <p className="text-sm font-thin text-gray-500">Cost: {accommodation.cost} FRW</p>
                            <Facilities facilities={accommodation.facilities}/>
                        </div>
                    </div>
                   ))
                        
                    
                }
                  
                </div>
                <div id="mainAvailable">
                {
                    Object.keys(bkdAcc).length > 0 ? bkdAcc.map((accommodation)=>(
                    
                    <div id={`${accommodation.id}`} className="flex space-x-4 rounded-xl shadow-md  mt-2 ml-4">
                        <img src={`${accommodation.image}`} onError={e=>e.currentTarget.src = 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'} className="w-1/2" alt="hotel"></img>
                        <div className="py-4">
                            <p className="text-xl font-bold text-gray-600 uppercase">{accommodation.name}</p>
                            <p className="text-sm font-thin text-gray-500">Capacity: {accommodation.capacity}</p>
                            <p className="text-sm font-thin text-gray-500">Available Rooms: {accommodation.roomsLeft}</p>
                            <p className="text-sm font-thin text-gray-500">Cost: {accommodation.cost} FRW</p>
                            <Facilities facilities={accommodation.facilities}/>
                        </div>
                    </div>  
                   )):(
                       <div className="items-center">
                       <p className="text-center font-thin text-xl mt-4 text-gray-600">No booked Accommodations yet</p>
                       </div>
                       
                   )
                        
                    
                }
                </div>
             
            </div>
            </div>
        </div>
    )
}
export default BookAccommodation;