
import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Home from "../Pages/Home";
import Services from "../components/Serivces/Services";
import Instructors from "../components/Instrucator/Instructors";




const MainLayout = () => {
    const services = useLoaderData()
    // console.log(services)
    const instructors = useLoaderData()
    console.log(instructors)
    return (
       <div>
         <div className="max-w-6xl mx-auto main-container h-[80vh] mb-8 ">
            <Navbar></Navbar>
            <Home></Home>
         
          
        </div>
         <Services services={services}></Services>
         <Instructors instructors={instructors}></Instructors>
       
       </div>
    );
};

export default MainLayout;