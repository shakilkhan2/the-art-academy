import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../shared/loader/Loader";
import Courses from "./Courses";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://art-academy-server.vercel.app/added_class")
      .then((res) => {
        setClasses(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {classes.map((course) => (
        <Courses key={course.id} course={course} />
      ))}
    </div>
  );
};

export default PopularClasses;
