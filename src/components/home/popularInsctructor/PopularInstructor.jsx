import axios from "axios";
import { useEffect, useState } from "react";


const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allInfo").then((res) => {
      setInstructors(res.data);
    });
  }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
      {instructors.map((instructor) => (
        <div className="border bg-slate-100 hover:shadow-2xl my-8 rounded-md" key={instructor.id}>
          <div className="bg-amber-100">
          <img className="h-64  mx-auto  rounded-md  object-fill" src={instructor.instructor?.image} alt="" />
          </div>
          <div className="p-2">
        
         
          <h3 className="  text-amber-700"><span className="font-bold ">Instructor:</span> {instructor?.instructor?.name}</h3>
          <h3 className="  text-amber-700"><span className="font-bold ">Email:</span> {instructor?.instructor?.email}</h3>
          <h3 className="  text-amber-700"><span className="font-bold ">Taken Classes:</span> {instructor?.instructor?.takenClasses}</h3>
         
          </div>
          <div className="">
          <button className="bg-white border border-amber-600  px-2 my-4 py-1  rounded-md hover:text-white hover:bg-amber-600 mx-2">Show More</button>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default PopularInstructor;