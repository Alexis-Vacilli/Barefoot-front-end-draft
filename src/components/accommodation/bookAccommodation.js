import Facilities from './facilities';

const BookAccommodation = ({ bookedAccommodations, bkdAcc, active, changeTab }) =>{
    const shiftTab = (id) =>{
        const mainIds = ['mainAll','mainAvailable','mainBooked'];
        for(let c = 0; c<=2;c++){
            try{
             document.getElementById(`${mainIds[c]}`).style.display="none";
             document.getElementById(mainIds[id]).style.display="grid";
             console.log("Shoft Tabing")
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
            <div id="navbar" className="flex space-x-4 w-full items-center mt-4">
                <p  id="nav-all" className={`text-blue-700 mb-2 py-2 uppercase font-bold ${active ? 'border-t-4 border-blue-700':''}`} onClick={e=>{
                    changeTab();
                //changeTab(!active)
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
                document.getElementById(e.target.id).style.display="block";}
                }>AVAILABLE</p>
                <p id="nav-available" className={`text-blue-700 mb-2 py-2 uppercase font-bold ${!active ? 'border-t-4 border-blue-700':''}`} onClick={e=>{
                    changeTab();
                //changeTab(!active)
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
                console.log('Something was clicked')
                document.getElementById(e.target.id).style.display="block";}}>BOOKED</p>
        
                </div>
                <div>
                <div id="mainAll" className="space-x-4 mt-2">
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
                <div id="mainAvailable" className="mt-2">
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