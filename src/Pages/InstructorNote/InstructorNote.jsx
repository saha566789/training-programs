import { AiOutlineDownload } from "react-icons/ai";

const InstructorNote = () => {
    return (
        <div className="hero  note-container bg-base-200">
        <div className="hero-content text-center">
          <div className="mt-12">
            <h1 className="text-4xl font-bold">Need <span className="text-red-500">notes</span> and <br /> <span className="text-red-400">lecture sheets</span> made by our best instructors?</h1>
            <p className="py-6"></p>
          
          
            <button className="btn bg-green-400"> <AiOutlineDownload></AiOutlineDownload>free download</button>
         
          </div>
        </div>
      </div>
    );
};

export default InstructorNote;