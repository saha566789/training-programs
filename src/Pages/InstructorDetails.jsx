import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


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
                <div className="card-body ml-12">
                    <h2 className="card-title ">{instructor.instructor_name}</h2>
                    <p>{instructor.professions[0]}</p>
                    <p>{instructor.instructor_bio}</p>
                   
                </div>
                <div>
                    <h2>Contact</h2>
                <p>{instructor.instructor_contact.email}</p>
                <p>{instructor.instructor_contact.phone}</p>
                <p>{instructor.instructor_contact.website}</p>
            </div>
            </div>
            
          </div>
     
        </div>
    );
};

export default InstructorDetails;