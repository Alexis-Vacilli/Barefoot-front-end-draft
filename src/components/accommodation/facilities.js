const Facilities = ({ facilities }) =>{
    console.log(typeof facilities);
    let facs = [];
   try{
    for(let fac of facilities){
        facs.push(<p className="text-sm font-thin text-gray-500">{fac}</p>)
    }
   }catch(e){

   }
    return (
        <div className="ml-2  border-l  border-blue-500 px-2">
        {facs}
        </div>
    )
}
export default Facilities;