
import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Home from "../Pages/Home";
import Services from "../components/Serivces/Services";
import Instructors from "../components/Instrucator/Instructors";
import Footer from "../Footer/Footer";
import InstructorNote from "../Pages/InstructorNote/InstructorNote";




const MainLayout = () => {
    const services = useLoaderData()
    // console.log(services)
    const instructors = useLoaderData()
    console.log(instructors)
    return (
       <div className="py-4">
         <div className="max-w-6xl mx-auto main-container h-[80vh] mb-8 ">
            <Navbar></Navbar>
            <Home></Home>
         
          
        </div>
         <Services services={services}></Services>
         <Instructors instructors={instructors}></Instructors>
         <InstructorNote></InstructorNote>

         <div className="mt-6"><Footer></Footer></div>
       
       </div>
    );
};

export default MainLayout;