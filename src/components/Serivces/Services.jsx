import ServicesCard from "./ServicesCard";


const Services = ({services}) => {
    return (
        <div>
            <h2 className="lg:text-5xl text-3xl font-bold text-center">Our Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6">
           {
                services?.map(service=><ServicesCard key={service.id} service={service}></ServicesCard>)
            }
           </div>
        </div>
    );
};

export default Services;