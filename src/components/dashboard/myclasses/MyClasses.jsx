import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../shared/loader/Loader";

const MyClasses = () => {
  const [newClasses, setNewClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/added_class").then((res) => {
      setNewClasses(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full px-4 mb-4">
      <h1 className="text-4xl font-bold text-center text-amber-600 my-8">Instructors classes..{newClasses.length}</h1>

      <div className="overflow-x-auto border border-amber-600 rounded-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Course Title</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newClasses.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.className}</td>
                <td>{user.seat}</td>
                <td>{user.price}</td>
                <td>
                  {user.role === "admin" ? (
                    <button disabled className="  px-2 my-4 text-white bg-amber-600  rounded-md ">
                      Admin
                    </button>
                  ) : (
                    <button  className="border  border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                     Pending
                    </button>
                  )}
                </td>
                <td>
                {user.role === "instructor" ? (
                    <button disabled
                     className="px-2 my-4 text-white bg-amber-600  rounded-md ">
                      instructor
                    </button>
                  ) : (
                    <button 
                     className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                    Update
                    </button>
                  )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;