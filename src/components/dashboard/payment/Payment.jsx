import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env. VITE_PAYMENT_GATEAWAY_PK)
const Payment = () => {
    return (
        <div className="w-[50%]">
             <h1 className="text-2xl font-semibold text-center text-amber-600 mb-8">Payment Card</h1>
             <Elements stripe={stripePromise}>
                <CheckOutForm/>
             </Elements>
        </div>
    );
};

export default Payment;