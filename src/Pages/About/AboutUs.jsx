import Footer from "../../Footer/Footer";
import Navbar from "../../Header/Navbar/Navbar";


const AboutUs = () => {
    return (
        <div>
           <Navbar></Navbar>
            <div>
             <img src="https://i.ibb.co/G37hvGc/About-Us-KLC.jpg" alt="" />
           <h1 className="lg:text-4xl text-2xl font-semibold">Why <span className="text-red-400 ">necessary</span>?</h1>
           <hr className="w-20 border-2 mt-2 border-red-600" />
           <p className="lg:text-xl text-sm ">Educational and training events are essential for individual and collective growth, adaptation to change, and staying competitive in various fields. They play a vital role in personal and professional development and contribute to the overall advancement of society.Building a professional network can be invaluable for career advancement and personal growth.</p>
            </div>
           <div className="mt-20 py-4">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default AboutUs;