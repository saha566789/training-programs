import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
       Aos.init();
       Aos.refresh()
      }, [])
      
    return (
        <div>
           <div className="hero-content text-center text-neutral-content mt-0 xl:mt-32 lg:mt-30">
    <div className="max-w-md">
      <h1 className="mb-5 text-xl lg:text-5xl font-bold text-white"  data-aos="fade-right">Improve Skills</h1>
      <p className="lg:mb-5 mb-2 text-black font-medium text-sm lg:text-lg" data-aos="fade-left">Unlocking Success: The Power of Skill Improvement</p>
   
    <button className="border h-10 w-28 mr-3 text-lg font-medium text-white border-black">Read more</button>
     <button className="border h-10 w-28 btn-success text-white">Apply</button>

    </div>
  </div>
          
        </div>
    );
};

export default Home;