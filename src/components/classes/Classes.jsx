import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../shared/loader/Loader";
import Courses from "../home/popularClasses/Courses";


const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/allInfo").then((res) => {
      setClasses(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

    return (
        <div>
          <Helmet>
            <title>Classes | The Art Academy</title>
          </Helmet>
          <div className="grid grid-cols-3 gap-8">
      {classes.map((course) => (
        <Courses
          
          key={course.id}
          course={course}
        />
      ))}
    </div> 
        </div>
    );
};

export default Classes;