import InstructorCard from "./InstructorCard";


const Instructors = ({instructors}) => {
    return (
        <div>
            <h2 className="text-5xl font-bold">Top Professional Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6">
                {
                    instructors?.map(instructor=><InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;