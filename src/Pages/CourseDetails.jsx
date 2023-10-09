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
           <p className="text-green-600 font-extrabold text-xl lg:text-3xl">{service.name}</p>
           <p className="lg:text-xl text-lg font-semibold">${service.price}</p>
           </div>
           <img className="lg:w-[100%] lg:h-96 mb-4 w-96 " src={service.image} alt="" />
           <p className="lg:text-5xl text-xl font-bold ">About Our course details</p>
           <hr className="lg:w-96 w-56 border-2 mt-2 border-red-600" />
           <p className=" text-xs lg:text-lg">{service.short_description}</p>
           <div className="py-10">
           <button className="btn bg-green-400 w-64 lg:w-96">Buy</button>
            </div>
          
        </div>

        </div>
    );
};

export default CourseDetails;