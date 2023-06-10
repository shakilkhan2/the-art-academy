import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../../shared/loader/Loader";

const ManageClasses = () => {
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
    <div className="w-full px-4">
      <Helmet>
        <title>Classes | The Art Academy</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center text-amber-600 my-8">
        Manage Classes.
      </h1>

      <div className="overflow-x-auto border border-amber-600 mb-4 rounded-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Courses</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th></th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {newClasses.map((user, index) => (
              
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.className}</div>
                    </div>
                  </div>
                </td>
                <td>{user.instructor}</td>
                <td>{user.instructorEmail}</td>
                <td>{user.seat}</td>
                <td className="text-right">${user.price}</td>
                <td>
                <button className="border  border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                      Pending
                    </button>
                </td>
                <td>
                <button className="border  border-green-600  px-2 my-4 hover:text-white hover:bg-green-600  rounded-md ">
                      Approve
                    </button>
                </td>
                <td>
                <button className="border  border-red-600  px-2 my-4 hover:text-white hover:bg-red-600  rounded-md ">
                      Denied
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
