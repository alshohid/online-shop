import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError ]= useState(null);
  const [paymentSuccess, setPaymentSuccess]  = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
const cardElement =elements.getElement(CardElement)
    const{error, paymentMethod} = await stripe.createPaymentMethod({
      //`Elements` instance that was used to create the Payment Element
      type:'card',
      card: cardElement,
    });

    if (error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(error.message);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handlePayment(paymentMethod.id)
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
   <div>
     <form onSubmit={handleSubmit}>
      
      <CardElement/>
      <button className="btn btn-primary" type="submit" disabled={!stripe}>Pay</button>
    </form>
    {
        paymentError &&  <h4 style={{color:"red"}}> {paymentError} </h4>
    }
    {
        paymentSuccess && <h4 style={{color:"green"}}> Your Payment is successfully done </h4>
    }
   </div>
  )
};

export default SimpleCardForm;