import PopularClasses from "./popularClasses/PopularClasses";
import PopularInstructor from "./popularInsctructor/PopularInstructor";
import Slider from "./slider/Slider";
import { Helmet, } from 'react-helmet-async';


const Home = () => {
    
    return (
        <div>
            <Helmet><title>Home | The Art Academy</title></Helmet>
           <Slider/>
           <h1 className="text-4xl font-bold text-center text-amber-600">Popular Classes</h1>
           <PopularClasses/>
           <h1 className="text-4xl font-bold text-center text-amber-600">Popular Instructors</h1>
           <PopularInstructor/>
        </div>
    );
};

export default Home;