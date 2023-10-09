import Navbar from "../../Header/Navbar/Navbar";
import { AiOutlinePhone,AiOutlineFieldTime } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import Footer from "../../Footer/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero contact-container h-[70vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="text-5xl font-bold">Contact Us</h1>
                       
                    </div>
                </div>
            </div>
           <div className="flex flex-col lg:flex-row justify-around">
           <div className="mt-20 ml-12">
           <h2 className="text-3xl font-bold text-gray-500">Reach out</h2>
           <div className="mt-6">
           <p className="flex font-bold text-red-900 gap-2"><BiCurrentLocation className="mt-1"></BiCurrentLocation>457 BIgBlue Street, Dhaka</p>
            <p className="flex font-bold text-red-900 gap-2"><AiOutlinePhone className="mt-1"></AiOutlinePhone>+99 01345 346 567</p>
            <p className="flex font-bold text-red-900 gap-2"><AiOutlineFieldTime className="mt-1"></AiOutlineFieldTime>Mon-Sat,8.00pm-10.00am</p>
           </div>
           </div>
           <div className="">
  <div className="hero-content flex-col ">
  
    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
      <form className="card-body">
        <div className="form-control">
          
          <input type="Text" placeholder="name" className="input w-64 lg:w-96 input-bordered" required />
        </div>
        <div className="form-control">
        
          <input type="email" placeholder="Email" className="input w-64 lg:w-96 input-bordered" required />
         
        </div>
        <div className="form-control">
        
        <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-64 lg:w-96" ></textarea>

         
        </div>
        <div className="form-control mt-6">
          <button className="btn w-20 text-white bg-red-400">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
           </div>
           <div className="mt-20 py-4">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Contact;