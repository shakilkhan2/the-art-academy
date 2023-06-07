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
        <div className="border bg-slate-100 hover:shadow-2xl my-8 rounded-md" key={course.id}>
          <img className="h-64 rounded-md object-fill" src={course.image} alt="" />
          <div className="p-2">
          <h3 className="text-xl font-bold text-amber-700">{course.name}</h3>
          <p>{course.description}</p>
          <h3 className="  text-amber-700"><span className="font-bold ">Instructor:</span> {course.instructor?.name}</h3>
          <h3 className="  text-amber-700"><span className="font-bold ">Available seats:</span> {course.availableSeats}</h3>
          <h3 className="  text-amber-700"><span className="font-bold ">Price:</span> {course.price}</h3>
          <h3 className="  text-amber-700"><span className="font-bold ">Ratings:</span> {course.ratings}</h3>
          </div>
          <button className="bg-white border border-amber-600  px-2 my-4 py-1  rounded-md hover:text-white hover:bg-amber-600 mx-2">Start Now</button>
        </div>
      ))}
    </div>
  );
};

export default PopularClasses;
