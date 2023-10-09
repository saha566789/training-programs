import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {id,name,image,price,short_description} = service;
    return (
        <div className="card  bg-green-100 shadow-xl">
        <figure><img className="h-52 w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title lg:font-bold font-semibold text-xl lg:text-2xl">{name}</h2>
          <p className="text-xs">{short_description}</p>
          <p className="text-xl">Price: <span  className="text-xl font-semibold"> ${price}</span></p>
        
         <div className="card-actions justify-start">
         <Link to={`/service/${id}`}> <p className="text-green-600 font-medium underline">Details</p></Link>
     <Link to={`/event/${id}`}> <p className="text-green-600 font-medium underline">Event Details</p></Link>
          </div>
         
        </div>
      </div>
    );
};

export default ServicesCard;