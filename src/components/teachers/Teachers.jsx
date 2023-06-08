import { Helmet } from "react-helmet-async";
import PopularInstructor from "../home/popularInsctructor/PopularInstructor";


const Teachers = () => {
    return (
        <div>
            <Helmet>
            <title>Instructors | The Art Academy</title>
          </Helmet>
            <PopularInstructor/>
        </div>
    );
};

export default Teachers;