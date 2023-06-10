import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

const handleSubmit =async (event) => {
    event.preventDefault()

    if(!stripe || !elements){
        return
    }

    const card = elements.getElement(CardElement);
    if(card === null){
        return
    }


}


    return (
        <div>
              <h1 className="text-4xl font-bold text-center text-amber-600 mb-8">Check out</h1>

              <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
        </div>
    );
};

export default CheckOutForm;