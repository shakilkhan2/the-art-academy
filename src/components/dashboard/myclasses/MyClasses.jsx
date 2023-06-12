import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../shared/loader/Loader";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const MyClasses = () => {
  const [newClasses, setNewClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://art-academy-server.vercel.app/added_class")
      .then((res) => {
        setNewClasses(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  // update classes:

  return (
    <div className="w-full px-4 mb-4">
      <h1 className="text-4xl font-semibold text-center text-amber-600 my-8">
        Your Added classes
      </h1>

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
                  <button
                    disabled={user.status !== "denied"}
                    onClick={() => toast.error(user?.feedback)}
                    className="border    px-2 my-4    rounded-md "
                  >
                    {user.status}
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/update-class/${user._id}`}>
                    <button className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                      Update
                    </button>
                  </Link>
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
