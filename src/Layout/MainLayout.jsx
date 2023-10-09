
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
       <div className="">
         <div className="lg:max-w-6xl md:max-w-7xl xl:mx-auto lg:mx-2  main-container  h-[50vh] lg:h-[80vh] mb-8 ">
            <Navbar></Navbar>
            <Home></Home>
         
          
        </div>
     
       <div className="md:mx-2 mx-2">
       <Services services={services}></Services>
         <Instructors instructors={instructors}></Instructors>
         <InstructorNote></InstructorNote>
       </div>
        

         <div className="mt-6 md:mx-2"><Footer></Footer></div>
       
       </div>
    );
};

export default MainLayout;