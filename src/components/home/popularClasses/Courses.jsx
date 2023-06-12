import { useContext } from "react";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const Courses = ({ course }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const checkUser = useUser();
  console.log(checkUser);
  const { _id, name, image, price } = course;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (course) => {
    console.log(course);

    if (user && user.email) {
      const cartItem = { courseId: _id, name, image, price, email: user.email };
      fetch("https://art-academy-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            setBtnDisabled(true);
            toast.success("Added Successfully!");
          }
        });
    } else {
      toast.error("Please login first.");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="border bg-slate-100 hover:shadow-2xl my-8 relative rounded-md group">
      <div className="overflow-hidden">
        <img
          className="h-64 rounded-md object-fill group-hover:scale-110"
          src={course.photo}
          alt=""
        />
      </div>
      <div className="p-2 mb-12">
        <h3 className="text-xl font-bold text-amber-700">{course.className}</h3>
        <p>{course.about}</p>
        <h3 className="  text-amber-700">
          <span className="font-bold ">Instructor:</span> {course.instructor}
        </h3>
        <h3 className="  text-amber-700">
          <span className="font-bold ">Available seats:</span> {course.seat}
        </h3>
        <h3 className="  text-amber-700">
          <span className="font-bold ">Price:</span> ${course.price}
        </h3>
        <h3 className="  text-amber-700">
          {/* <span className="font-bold ">Ratings:</span> {course.ratings} */}
        </h3>
      </div>

      <button
        onClick={() => handleAddToCart(course)}
        disabled={
          btnDisabled ||
          checkUser.includes("instructor") ||
          checkUser.includes("admin")
        }
        className="bg-white border border-amber-600  px-2 py-1  rounded-md hover:text-white hover:bg-amber-600 mx-2 disabled:bg-amber-100 disabled:text-black absolute bottom-4  left-2"
      >
        {btnDisabled
          ? "Added"
          : checkUser.includes("instructor") || checkUser.includes("admin")
          ? "not allowed"
          : "Start Now"}
      </button>
    </div>
  );
};

export default Courses;
