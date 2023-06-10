import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";
import { toast } from "react-hot-toast";

const CheckOutForm = ({ price, cart }) => {
  console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("paymentIntend", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartId: cart.map((course) => course._id),
        courseId: cart.map((course) => course.courseId),
        orderStatus: "pending",
        courses: cart.map((course) => course.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          toast.success("Congratulations! You got the access.");
        }
      });
    }
  };

  return (
    <div>
      <form
        className="border bg-base-100 shadow-2xl border-amber-700 p-4 pb-12 rounded-md"
        onSubmit={handleSubmit}
      >
        <CardElement
          className="border border-amber-700 p-2 rounded-md"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="  px-4 my-4 py-1  rounded-md  bg-amber-600 text-white hover:bg-amber-700 mx-2 font-semibold"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-sm text-red-600 mt-4 text-center"> {cardError} </p>
      )}
      {transactionId && (
        <p className="text-green-600 text-center text-sm mt-4">
          Payment success with Transaction Id:{" "}
          <span className="text-amber-600 underline">{transactionId}</span>
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
