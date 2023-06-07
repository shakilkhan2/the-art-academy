import axios from "axios";
import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setClasses(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8">
      {classes.map((course) => (
        <div className="border  rounded-md" key={course.id}>
          <img className="h-64 rounded-md object-fill" src={course.image} alt="" />
          <div className="p-2">
          <h3 className="text-xl font-bold text-amber-700">{course.name}</h3>
          <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClasses;
