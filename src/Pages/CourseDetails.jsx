import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const CourseDetails = () => {

   
    const services= useLoaderData()
    const {id} = useParams()
    console.log(services)
   
    
   const service = services?.find(service=>service.id === id)
    // console.log(service)

   
    return (
        <div >
         
           <Navbar></Navbar>
          <div >
           <div className="flex gap-4 py-6">
           <p className="text-green-600 font-extrabold text-3xl">{service.name}</p>
           <p className="text-xl font-semibold">${service.price}</p>
           </div>
           <img className="w-[50%] h-96 mx-auto " src={service.image} alt="" />
           <p className="text-5xl font-bold ">About Our course details</p>
           <hr className="w-96 border-2 mt-2 border-red-600" />
           <p className="text-lg">{service.short_description}</p>
           <div className="py-10">
           <button className="btn bg-green-400 w-96">Buy</button>
            </div>
          
        </div>

        </div>
    );
};

export default CourseDetails;