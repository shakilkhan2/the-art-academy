import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
          <Helmet>
            <title>Registration | The Art Academy</title>
          </Helmet>
             <form
    //   onSubmit={handleRegister}
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
          id=""
          placeholder="Name"
        />{" "}
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] my-6 border rounded-lg border-amber-500"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />{" "}
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] border rounded-lg border-amber-500"
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />{" "}
        <br />
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] border rounded-lg border-amber-500"
          type="password"
          name="confirm"
          id=""
          placeholder="confirm password"
          required
        />{" "}
        <br />
        <input
          className="mr-4 pl-2 py-3 mt-6 w-[50%] border rounded-lg border-amber-500"
          type="text"
          name="photo"
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
      </div>
    </form>
        </div>
    );
};

export default Register;