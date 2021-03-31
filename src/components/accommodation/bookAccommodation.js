import Facilities from './facilities';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import { token } from '../../actions/auth';
import axios from 'axios';

const BookAccommodation = ({ bookedAccommodations, active, changeTab, focusAccommodation, openAccomodation }) =>{
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(new Date());
    const [bkdAcc, setBkbAcc] = useState([]);
    const [specificAcc, setSpecificAcc] = useState([])
    let maxBooked;
    useEffect(()=>{
        const getBkdAcc = async() =>{
            const accomodationsFromServer = await BKDAccomnodat();
            maxBooked = accomodationsFromServer;
            console.log(maxBooked);
            BKDAccomnodat().then((r)=>{
                setBkbAcc(accomodationsFromServer);
                getSpecificAccommodations().then((k)=>{
                    setSpecificAcc(k)
                });
            })
            
        }
        shiftTab('nav-all')
        getBkdAcc();
    }, []);
    const shiftTab = (id) =>{ 
        document.getElementById('mainAll').style.display="none";
        document.getElementById('mainAvailable').style.display="none";
      if(id == 'nav-all'){
          document.getElementById('mainAll').style.display="grid";
      }else{
          document.getElementById('mainAvailable').style.display="grid";
      }
    }

    const getSpecificAccommodations = async() =>{
        let retval = [];
         axios({
            method: 'GET',
            url: 'https://elite-staging.herokuapp.com/api/v1/accomodations/read',
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            }
        }).then((res)=>{
            for(let bookedAcc of res.data.data ){
                for(let accWithId of maxBooked){
                    if(bookedAcc.id == accWithId.AccomodationId){
                        console.log(bookedAcc)
                        retval.push(bookedAcc)
                    }
                }
                
            }
            setSpecificAcc(retval);
    
            return retval;
        });
    }
    const BKDAccomnodat = async() => {
        const res = await axios.get('https://elite-staging.herokuapp.com/api/v1/booking/bookedAccomodations', 
        {
          headers: { 'Authorization': `Bearer ${token}` }
    
        })  
       return res.data.data;
      }

    const BookThisAccommodation = async(accommodation) => {
        let data = {
            'checkinDate': checkinDate.toLocaleDateString().toString().replaceAll('/', '-'),
            'checkoutDate': checkoutDate.toLocaleDateString().toString().replaceAll('/', '-'),
            'AccomodationId': Number(accommodation.id),
          }
      try{
        const res = await axios(
        { method: 'post',
          url: 'https://elite-staging.herokuapp.com/api/v1/booking/book', 
          headers: { 'Authorization': `Bearer ${token}`, "Content-Type": "application/json", 'permission_name': 'book_accomodation' }, 
          data
        }
        );
        alert('Accommodation Was succesfully booked')
        return res.data.data;  
      }catch(error){
          //alert(error);
          document.getElementById('processor').style.display = "block"
          document.getElementById('processor').innerHTML = "Something went wrong"
          console.log(error.response)
      }
       
      }
    
    return (
        <div>
            <div className="w-full bg-gray-100 shadow-md px-2 py-4">
                <p id="targ" className="text-xl font-bold">Accommodation</p>
            </div>
            <div>
            <div id="navbar" className="flex space-x-4 w-full items-center mt-4">
                <p  id="nav-all" className={`text-blue-700 mb-2 py-2 uppercase font-bold ${active ? 'border-t-4 border-blue-700':''}`} onClick={e=>{
                    changeTab();
                    shiftTab(e.target.id)
                //changeTab(!active)
                document.getElementById(e.target.id).style.display="block";}
                }>AVAILABLE</p>
                <p id="nav-available" className={`text-blue-700 mb-2 py-2 uppercase font-bold ${!active ? 'border-t-4 border-blue-700':''}`} onClick={e=>{
                    changeTab();
                    shiftTab(e.target.id)
                //changeTab(!active)
                document.getElementById(e.target.id).style.display="block";}}>BOOKED</p>
        
                </div>
                <div className="flex">
                <div id="mainAll" className="space-x-4 mt-2">
                { 
                   bookedAccommodations.map((accommodation)=>(
                    <div id={`${accommodation.id}`} className={`flex space-x-4 rounded-xl shadow-md  mt-2 ml-4 ${accommodation.roomsLeft > 0 ? '':'bg-red-50'}`} onClick={()=>{
                        focusAccommodation(accommodation)
                    }}>
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
                <div id="mainAvailable" className="mt-2 grid grid-cols-2">
                {   
                   specificAcc !== undefined ? (
                    specificAcc.map((accommodation)=>(
                    <div id={`${accommodation.id}`} className={`flex space-x-4 rounded-xl shadow-md  mt-2 ml-4`} onClick={()=>{
                    }}> 
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
                   ) : (
                       <p></p>
                   )
                   
                }
             
                </div>       
            </div>
            <div id="accommodationOpener" className={` ${  (openAccomodation.name !== undefined )? '':'hidden' }`} >
                <div id="accommodationMain" className=" bg-gray-100 rounded-xl p-4 items-center flex space-x-2">
                <img src={`${openAccomodation.image}`} onError={e=>e.currentTarget.src = 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'} className="w-1/2 h-full object-cover" alt="hotel"></img>
               <div className="items-top h-full">
                <p className="text-xl font-bold ">BOOK THIS ACCOMMODATION NOW</p>
                <p className=" mt-4 text-gray-500"><span className="font-bold text-black">Accommodation name: </span>{openAccomodation.name}</p>
                <p className="text-gray-500"><span className="font-bold text-black ">Cost: </span> {openAccomodation.cost}</p>
                <p className="text-gray-500"> <span className="font-bold text-black">Available Rooms: </span> {openAccomodation.roomsLeft}</p>
                <Facilities facilities={openAccomodation.facilities}/>
               
                <div className="grid grid-cols-2">
                <label for="checkin">Checkin Date</label>
                <ReactDatePicker id="checkin" locale="es" selected={checkinDate} onChange={date => setCheckinDate(date)}/><br></br>
                </div>

                <div className="grid grid-cols-2">
                <label for="checkout">Checkout Date</label>
                <ReactDatePicker id="checkout" locale="es"  selected={checkoutDate} onChange={date => setCheckoutDate(date)} /><br></br>
                </div>
                <div>
                    <p id="processor">Processing ... </p>
                </div>

                <div className="flex space-x-2">
                    <button className="bg-gray-100 text-xl text-blue-700 font-bold px-2 py-1 border-2 border-blue-700" onClick={e=>{
                        focusAccommodation({undefined})
                        document.getElementById('processor').innerHTML = "Processing ...";
                        document.getElementById('processor').style.display = "none";
                    }} >CANCEL</button>
                    <button className="bg-blue-700 text-xl text-gray-100 font-bold px-2 py-1" onClick={()=>{
                        document.getElementById('processor').style.display = "block";
                        BookThisAccommodation(openAccomodation)
                    }} >BOOK</button>
                </div>
               </div>
                </div>
               
            </div>
            </div>
        </div>  
    )
}
export default BookAccommodation;