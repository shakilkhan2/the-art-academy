import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  // const price = parseInt(cart.price.replace("$", ""))
  const total = cart.reduce((sum, course) => course.price + sum, 0);

  const handleDelete = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${course._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full px-4 ">
      <h1 className="text-4xl font-bold text-center text-amber-600 mb-8">
        My Classes
      </h1>

      <div className="uppercase font-semibold flex items-center justify-between px-4 border border-amber-600 rounded-t-md">
        <h1>Selected classes: {cart.length}</h1>
        <h1 className="mx-12"> Price: ${total}</h1>
        <Link to="/dashboard/payment">
          <button className="bg-white border border-amber-600  px-2 my-4 py-1  rounded-md hover:text-white hover:bg-amber-600 font-normal mx-2">
            Pay Now
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto border border-amber-600 rounded-b-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Course</th>
              <th>Price</th>
              <th>Action</th>
              <th>Start Class</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td>{course.name}</td>
                <td>${course.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(course)}
                    className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md "
                  >
                    Remove
                  </button>
                </td>
                <td>
                  <Link to="/dashboard/payment">
                    <button className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">
                      Play
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
