import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const {createUser, updateUser} = useContext(AuthContext);
const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      
      console.log(loggedUser);
      updateUser(data.name, data.photo)
      .then(() => {
        console.log('user updated')
        reset();
        toast.success("Account Created Successfully!");
        navigate('/')
      })
      .catch(error => console.log(error))
    })
  };

  return (
    <div>
      <Helmet>
        <title>Registration | The Art Academy</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-amber-100 border rounded-lg border-amber-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
      >
        <h1 className="text-center text-3xl text-amber-500 font-bold">
          Please Register
        </h1>
        <hr className="w-[70%] mx-auto mt-2 border-amber-500" />
        <div className="text-center">
          <br />
          <input
            className="mr-4 pl-2 py-3 w-[50%] mt-6 border rounded-lg border-amber-500"
            type="text"
            name="name"
            {...register("name")}
            id=""
            placeholder="Name"
          />{" "}
          <br />
          <input
            className="mr-4 pl-2 py-3 w-[50%] my-6 border rounded-lg border-amber-500"
            type="email"
            name="email"
            {...register("email", { required: true })}
            id=""
            placeholder="Email"
            // required
          />
          <br />
          <input
            className="mr-4 pl-2 py-3 w-[50%] border rounded-lg border-amber-500"
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}/
              
            })}
            id=""
            placeholder="password"
            // required
          />{" "}
          <br />
          <br />
          <input
            className="mr-4 pl-2 py-3 w-[50%] border rounded-lg border-amber-500"
            type="password"
            name="confirm"
            {...register("confirm")}
            id=""
            placeholder="confirm password"
            // required
          />{" "}
          <br />
          <input
            className="mr-4 pl-2 py-3 mt-6 w-[50%] border rounded-lg border-amber-500"
            type="text"
            name="photo"
            {...register("photo")}
            id=""
            placeholder="photo url"
          />
          <br />
          {/* {error.isError && (
          <p className="mt-4 text-red-600 text-xs text-center">
            {error.message}
          </p>
        )} */}
          <button className="text-center border rounded-lg border-amber-500 bg-white text-amber-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-amber-500">
            Register
          </button>
          <p>
            <small>
              Already have an account?{" "}
              <span className="text-amber-500 hover:underline">
                <Link to="/login">Login.</Link>
              </span>
            </small>
          </p>
         
          {errors.email && (
  <div className="text-red-500">
    <small>Email is required</small>
  </div>
)}



{errors.password?.type === "required" && (
  <div className="text-red-500">
    <small>Password is required.</small>
  </div>
)}

{errors.password?.type === "minLength" && (
  <div className="text-red-500">
    <small>
      The password should be at least 6 characters long.
    </small>
  </div>
)}

{errors.password?.type === "pattern" && (
  <div className="text-red-500">
    <small>
      The password must contain at least one uppercase letter and one special character.
    </small>
  </div>
)}









        </div>
      </form>
    </div>
  );
};

export default Register;
