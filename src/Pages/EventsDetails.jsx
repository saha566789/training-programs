import { useLoaderData, useParams } from "react-router-dom";

import { BsFillCalendar2Fill,BsFillHouseFill } from "react-icons/bs";
import {BiTimeFive} from "react-icons/bi";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const EventsDetails = () => {
    const events = useLoaderData()
    // console.log(events)

    const {id} = useParams()
    const event = events.find(event=>event.id === id)
    // console.log(event)
   
    return (
        <div>
            <Navbar></Navbar>
          
           <div>
            <img className="lg:w-[50%] w-[80%] lg:h-96  h-64" src={event.image} alt="" />
            <p className="text-green-600 font-extrabold text-lg lg:text-3xl">{event.name}</p>
            <p className="text-xl font-semibold">Event Details</p>
           <div className="mt-2">
           <div className="flex gap-2">
                <BsFillCalendar2Fill ></BsFillCalendar2Fill>
               <p className="font-medium text-sm">Date: <span>{event.date}</span></p>
              
            </div>
            <div className="flex gap-2">
            <BiTimeFive></BiTimeFive>
               <p className="font-medium text-sm">Time: <span>{event.time}</span></p>
              
            </div>
            <div className="flex gap-2">
        <BsFillHouseFill></BsFillHouseFill>
               <p className="font-medium text-sm">Venue: <span>{event.venue}</span></p>
              
            </div>
           </div>
           </div>
           <div className="mt-20 ">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default EventsDetails;