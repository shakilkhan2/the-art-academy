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
    console.log('card', card)

}


    return (
        <div>
             

              <form className="border bg-base-100 shadow-2xl border-amber-700 p-4 pb-12 rounded-md" onSubmit={handleSubmit}>
      <CardElement className="border border-amber-700 p-2 rounded-md"
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
      <button type="submit" className="  px-4 my-4 py-1  rounded-md  bg-amber-600 text-white hover:bg-amber-700 mx-2 font-semibold" disabled={!stripe}>
        Pay
      </button>
    </form>
        </div>
    );
};

export default CheckOutForm;