import { Link } from "react-router-dom";
import {AiOutlineYoutube,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai"

import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const InstructorCard = ({instructor}) => {
  useEffect(() => {
    Aos.init( {
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
   }, [])
    const {id,instructor_name,instructor_image,professions} =instructor
    return (
      <div className="flex gap-4">
          <div className="avatar">
        <div className="w-24 rounded" >
          <img data-aos="zoom-in" src={instructor_image} />
        </div>
       
      </div>
       <div className="font-semibold">
     <Link to={`/instructor/${id}`}>  <p className="text-red-400">{instructor_name}</p></Link>
       <p>{professions[0]}</p>
       <div className="flex gap-2 mt-10">
       <a style={{color:"red"}} href=""><AiOutlineYoutube></AiOutlineYoutube></a>
       <a style={{color:"blue"}} href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
       <a style={{color:"#0A66C2"}} href=""><AiFillLinkedin></AiFillLinkedin></a>
       </div>
   </div>
   
      </div>
    );
};

export default InstructorCard;