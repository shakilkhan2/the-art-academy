import { useContext } from "react";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { fromJSON } from "postcss";
import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddClass = () => {
  const navigate = useNavigate();
  // const [axiosSecure] = useAxiosSecure();
  // const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
  const { user } = useContext(AuthContext);

  const handleAddAClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const price = parseFloat(form.price.value);
    const seat = parseFloat(form.seat.value);
    const about = form.about.value;
    const classInfo = {
      className: name,
      photo: photo,
      instructor: instructor,
      instructorEmail: email,
      price: price,
      seat: seat,
      status: "pending",
      about: about,
    };
    console.log(classInfo);

    fetch("https://art-academy-server.vercel.app/added_class", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Class added successfully!");
          navigate("/dashboard/my_classes");
        } else {
          toast.error("Failed to add class.");
          form.reset();
        }
      });

    form.reset();
  };

  return (
    <div className="w-full px-4">
      <form
        onSubmit={handleAddAClass}
        className="bg-white border rounded-lg border-amber-500  mx-auto py-12 my-8 "
      >
        <h1 className="text-center text-3xl text-amber-500 font-bold">
          Add a New Class
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
            defaultValue="https://img.freepik.com/free-photo/close-up-oil-paints-brushes-palette_176420-2827.jpg?w=740&t=st=1686559405~exp=1686560005~hmac=114c452eb8827b84a3e95ebf2219d1682f7f1e5bb93bb584f23cfbf06b389d6c"
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
        <div className=" flex justify-between">
          <textarea
            className=" mx-auto pl-2 py-3 w-[95%] mt-6 border rounded-lg border-amber-500"
            type="text"
            placeholder="description"
            name="about"
            id=""
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div className="">
          <button className="w-[95%] ms-6 text-center border rounded-lg  px-8 py-3 mt-8 font-semibold text-white bg-amber-500 hover:bg-amber-400">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
