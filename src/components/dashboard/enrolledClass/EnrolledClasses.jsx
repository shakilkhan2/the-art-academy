import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../shared/loader/Loader";
import axios from "axios";

const EnrolledClasses = () => {
    const [enrolledClass, setEnrolledClass] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      axios.get("http://localhost:5000/payments").then((res) => {
        setEnrolledClass(res.data);
        console.log(res.data)
        setLoading(false);
      });
    }, []);

    if (loading) {
            return <Loader />;
          }

 

  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-semibold text-center text-amber-600 mb-8">Enrolled Classes</h1>
      <div className="overflow-x-auto border border-amber-600 rounded-md mb-4">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Course</th>
              <th>Price</th>
              <th>Quantity</th>
              
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((enrolled, index) => (
              <tr key={enrolled._id}>
                <th>{index + 1}</th>
                <td>{enrolled?.courses?.[1]}</td>
                <td>${enrolled.price}</td>
                <td className="">{enrolled.quantity}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
<h1>EnrolledClasses</h1>;
