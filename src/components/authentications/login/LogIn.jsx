import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {googleSignIn} = useContext(AuthContext);

  // const [error, setError] = useState({ isError: false, message: "" });

  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user?.uid) {
    return <Navigate to={from}></Navigate>;
  }

const handleGoogleSignIn = () => {
  googleSignIn()
  .then(result => {
    const loggedUser =result.user;
    console.log(loggedUser)
  })
}

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      reset();
      navigate(from, { replace: true });
      toast.success("Logged in Successfully!");
    });
    
  };

  return (
    <div className="">
      <Helmet>
        <title>Login | The Art Academy</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-amber-100 border rounded-lg border-amber-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
      >
        <h1 className="text-center text-3xl text-amber-500 font-bold">
          Please Log in
        </h1>
        <hr className="w-[70%] mx-auto mt-2 border-amber-500" />
        <div className="text-center">
          <br />
          <input
            className="mx-auto pl-2 py-3 w-[50%] my-6 border rounded-lg border-amber-500"
            type="email"
            name="email"
            {...register("email")}
            id=""
            placeholder="Email"
            required
          />{" "}
          <br />
          <div className="relative">
            <input
              className="mx-auto pl-2 py-3 w-[50%] border rounded-lg border-amber-500"
              type={showPassword ? "text" : "password"}
              name="password"
              {...register("password")}
              id=""
              placeholder="Password"
              required
            />
            <button
              className="absolute right-40 top-1/2 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <br />
          {/* {error.isError && (
            <p className="mt-4 text-red-600 text-xs text-center">
              {error.message}
            </p>
          )} */}
          <button className="text-center border rounded-lg  border-amber-500 bg-white text-amber-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-amber-500 w-[20%] mx-auto">
            Login
          </button>
          <p>
            <small>
              Don’t have an account?{" "}
              <span className="text-amber-500 hover:underline">
                <Link to="/register">Create an account.</Link>
              </span>
            </small>
          </p>
          <div
              onClick={handleGoogleSignIn}
            className="flex items-center cursor-pointer justify-around  border rounded-lg  px-8 py-3 mt-8 font-semibold  text-white bg-amber-950 w-[50%] mx-auto"
          >
            <div>
              <FcGoogle className="text-3xl" />
            </div>
            <div>
              <p>Continue with google</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
