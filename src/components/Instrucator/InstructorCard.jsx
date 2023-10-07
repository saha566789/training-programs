import { Link } from "react-router-dom";


const InstructorCard = ({instructor}) => {
    const {id,instructor_name,instructor_image,professions} =instructor
    return (
      <div className="flex gap-4">
          <div className="avatar">
        <div className="w-24 rounded">
          <img src={instructor_image} />
        </div>
       
      </div>
       <div className="font-semibold">
     <Link to={`/instructor/${id}`}>  <p className="text-red-400">{instructor_name}</p></Link>
       <p>{professions[0]}</p>
   </div>
      </div>
    );
};

export default InstructorCard;