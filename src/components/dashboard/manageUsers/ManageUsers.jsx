import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

// admin
  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            toast.success(`${user.name} is now an admin!`);
        }
    })
  }
//   instructor
  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            toast.success(`${user.name} is now an instructor!`);
        }
    })
  }



  return (
    <div className="w-full px-4">
      <Helmet>
        <title>Users | The Art Academy</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center text-amber-600 my-4">
        Manage Users:{users.length}
      </h1>
      <div className="uppercase font-semibold flex items-center justify-between px-4 "></div>
      <div className="overflow-x-auto border border-amber-600">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>user</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <button disabled className="  px-2 my-4 text-white bg-amber-600  rounded-md ">
                      Admin
                    </button>
                  ) : (
                    <button  onClick={()=>handleMakeAdmin(user)} className="border  border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                     Make Admin
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
                    <button onClick={()=>handleMakeInstructor(user)}
                     className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                     Make instructor
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

export default ManageUsers;
