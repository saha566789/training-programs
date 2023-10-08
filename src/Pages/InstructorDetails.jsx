import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { AiOutlineMail } from "react-icons/ai";
import {CgWebsite} from "react-icons/cg"


const InstructorDetails = () => {
    const instructors = useLoaderData()
    console.log(instructors)
    const { id } = useParams()
    const instructor = instructors?.find(instructor => instructor.id === id)
    console.log(instructor)
    return (
        <div>
            <Navbar></Navbar>

          <div >
          <div className="card  bg-base-100 ">
           
                <figure><img className="w-[500px]" src={instructor.instructor_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-red-500">{instructor.instructor_name}</h2>
                    <p className="font-semibold text-gray-400">{instructor.professions[0]}</p>
                    <p className="text-xl">{instructor.instructor_bio}</p>
                   
                </div>
                <div className="ml-6 py-4">
                    <h2 className="text-2xl">Contact</h2>
                <p className="flex underline gap-1"><span style={{color:"blue"}} className="mt-1"><AiOutlineMail></AiOutlineMail></span>{instructor.instructor_contact.email}</p>
               
                <p className="flex underline gap-1 "><span style={{color:"blue"}}  className="mt-1"><CgWebsite></CgWebsite></span>{instructor.instructor_contact.website}</p>
            </div>
            </div>
            
          </div>
     
        </div>
    );
};

export default InstructorDetails;