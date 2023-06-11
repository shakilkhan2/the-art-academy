import { useContext } from "react";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useParams, useRevalidator } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  let revalidator = useRevalidator();
  console.log(id);

  const handleUpdateClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const price = parseFloat(form.price.value);
    const seat = parseFloat(form.seat.value);
    const classInfo = {
      className: name,
      photo: photo,
      instructor: instructor,
      instructorEmail: email,
      price: price,
      seat: seat,
    };
    console.log(classInfo);

    fetch(`http://localhost:5000/added_class/${id}`, {
      method: "PATCH",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        revalidator.revalidate();
        Swal.fire("Good job!", "Your product successfully updated!", "success");
        console.log(data);
      });

    form.reset();
  };

  return (
    <div className="w-full px-4">
      <form
        onSubmit={handleUpdateClass}
        className="bg-white border rounded-lg border-amber-500  mx-auto py-12 my-8 "
      >
        <h1 className="text-center text-3xl text-amber-500 font-bold">
          Update Your Class
        </h1>
        <hr className="w-[70%] mx-auto mt-2 mb-8 border-amber-500" />
        <div className=" flex justify-between">
          <input
            className=" mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-amber-500"
            type="text"
            name="name"
            id=""
            placeholder="class name"
            required
          />
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-amber-500"
            type="text"
            name="photo"
            defaultValue="https://img.freepik.com/free-photo/boy-standing-table-drawing-looking-camera_259150-59573.jpg?w=740&t=st=1686400190~exp=1686400790~hmac=81d24b99867910b43b7f2bf852448f804dcc4b4f8cfb71af89170576c2305053"
            placeholder="photo url"
            id=""
          />
        </div>
        <div className=" flex justify-between">
          <input
            className=" mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-amber-500"
            type="text"
            name="instructor"
            id=""
            readOnly
            defaultValue={user?.displayName}
            placeholder="Instructor"
          />
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-amber-500"
            type="text"
            name="email"
            id=""
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className=" flex justify-between">
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-amber-500"
            type="number"
            min={0}
            name="seat"
            id=""
            placeholder="available seat"
            required
          ></input>
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-amber-500"
            type="number"
            min={0}
            name="price"
            id=""
            placeholder="$price"
            required
          />
        </div>
        <div className="">
          <button className="w-[95%] ms-6 text-center border rounded-lg  px-8 py-3 mt-8 font-semibold text-white bg-amber-500 hover:bg-amber-400">
            Update Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
