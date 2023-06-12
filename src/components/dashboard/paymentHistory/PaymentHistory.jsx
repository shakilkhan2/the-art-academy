import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../shared/loader/Loader";
import axios from "axios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://art-academy-server.vercel.app/payments").then((res) => {
      setPayments(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-4">
      <h1 className="text-2xl font-semibold text-center text-amber-600 mb-8">
        Payment History
      </h1>
      <div className="overflow-x-auto border border-amber-900 rounded-md mb-4">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-amber-900 text-white">
            <tr>
              <th>No.</th>
              <th>Course</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment?.courses?.[0]}</td>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td className="text-right">{payment.quantity}</td>
                <td className="text-right">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
