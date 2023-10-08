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
           <div className="hero-content text-center text-neutral-content mt-32">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white"  data-aos="fade-right">Improve Skills</h1>
      <p className="mb-5 text-black font-medium text-lg" data-aos="fade-left">Unlocking Success: The Power of Skill Improvement</p>
   
    <button className="btn mr-3 border text-green-400">Read more</button>
     <button className="btn btn-success text-white">Apply</button>

    </div>
  </div>
          
        </div>
    );
};

export default Home;