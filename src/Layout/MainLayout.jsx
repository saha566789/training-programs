
import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Home from "../Pages/Home";
import Services from "../components/Serivces/Services";



const MainLayout = () => {
    const services = useLoaderData()
    console.log(services)
    return (
       <div>
         <div className="max-w-6xl mx-auto main-container h-[80vh] mb-8 ">
            <Navbar></Navbar>
            <Home></Home>
         
          
        </div>
         <Services services={services}></Services>
       </div>
    );
};

export default MainLayout;