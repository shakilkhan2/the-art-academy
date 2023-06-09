import useCart from "../../hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();
    console.log(cart)
    // const price = parseInt(cart.price.replace("$", ""))
    const total = cart.reduce((sum, course) => course.price + sum, 0)
    return (
        <div className="w-full px-4 ">
            <div className="uppercase font-semibold flex items-center justify-between px-4 border border-amber-600">
            <h1>Selected classes: {cart.length}</h1>
            <h1 className="mx-12"> Price: ${total}</h1>
            <button className="bg-white border border-amber-600  px-2 my-4 py-1  rounded-md hover:text-white hover:bg-amber-600 font-normal mx-2">Pay Now</button>
        </div>
        <div className="overflow-x-auto border border-amber-600">
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
      {
        cart.map((row, index) => <tr key={row._id}>
            <th>{index+1}</th>
            <td>{row.name}</td>
            <td>${row.price}</td>
            <td><button className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">Remove</button></td>
            <td><button className="border border-amber-600  px-2 my-4 hover:text-white hover:bg-amber-600  rounded-md ">Play</button></td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;