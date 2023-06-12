import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../../shared/loader/Loader";
import { toast } from "react-hot-toast";

const ManageClasses = () => {
  const textRef = useRef();
  const [declinedId, setDeclinedId] = useState("");
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

  // approve
  const handleUpdate = (_id) => {
    fetch(`https://art-academy-server.vercel.app/added_class/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedTasks = newClasses.map((task) => {
            if (task._id === _id) {
              return { ...task, status: "approved" };
            }
            return task;
          });
          setNewClasses(updatedTasks);
        }
      })
      .catch((error) => {
        console.error("Error updating task status:", error);
      });
  };

  // denied
  const handleDenied = (_id, feedback) => {
    if (!feedback || !_id) {
      toast.error("Feedback required!");
      return;
    }

    fetch(`https://art-academy-server.vercel.app/added_class/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "denied", feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setDeclinedId("");
          const updatedTasks = newClasses.map((task) => {
            if (task._id === _id) {
              return { ...task, status: "denied", feedback };
            }
            return task;
          });
          setNewClasses(updatedTasks);
        }
      })
      .catch((error) => {
        console.error("Error updating task status:", error);
      });
  };

  const handleDeny = (id) => {
    setDeclinedId(id);
  };

  return (
    <>
      {declinedId ? (
        <div className="z-50 flex justify-center items-center fixed w-full h-full top-0 left-0 bg-[#02020287]">
          <div className="w-[500px] bg-white p-4 rounded-md">
            <p className="text-amber-700 font-semibold">
              Please describe reason
            </p>
            <textarea
              ref={textRef}
              className="border border-amber-500 rounded-md w-full p-2"
              name=""
              id=""
              placeholder="Feedback"
              cols="50"
              rows="5"
            ></textarea>
            <div className="flex justify-end">
              <button
                className="bg-green-500 px-2 mx-4 py-1 rounded-md font-semibold"
                onClick={() => handleDenied(declinedId, textRef.current.value)}
              >
                Send
              </button>
              <button
                className="bg-red-600 px-2 py-1 rounded-md font-semibold"
                onClick={() => setDeclinedId("")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

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

                <th className="">Status</th>
                <th>Action</th>
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
                          <img src={user.photo} alt="User" />
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
                    {user.status === "approved" ? (
                      <span className="px-2 my-4 text-white bg-green-600  rounded-md">
                        Approved
                      </span>
                    ) : (
                      <button
                        className="border  border-green-600  px-2 my-4 hover:text-white hover:bg-green-600  rounded-md "
                        onClick={() => handleUpdate(user._id)}
                      >
                        Approve
                      </button>
                    )}
                  </td>
                  <td>
                    {user.status === "denied" ? (
                      <span className="px-2 my-4 text-white bg-red-600  rounded-md">
                        Denied
                      </span>
                    ) : (
                      <button
                        className="border  border-red-600  px-2 my-4 hover:text-white hover:bg-red-600  rounded-md "
                        onClick={() => handleDeny(user._id)}
                      >
                        Deny
                      </button>
                    )}
                  </td>
                  {/* <td>
                    <button className="border  border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                     Decline & Feedback
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
