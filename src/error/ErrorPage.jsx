import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center">
      <div className="w-[30%] mx-auto mt-16">
        <img src="https://i.ibb.co/4pTsnf1/13315300-5203299.jpg" alt="" />
        <h3 className="text-center text-amber-700 mb-16 mt-4 text-2xl">
          {" "}
          An unexpected error occurs! <br />{" "}
          <span className="hover:underline text-lg text-blue-500">
            <Link to="/">Back to home</Link>
          </span>{" "}
        </h3>
      </div>
      <br />
    </div>
  );
};

export default ErrorPage;