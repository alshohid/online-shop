import { CardElement, LinkAuthenticationElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckoutForm({handlePayment}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError ]= useState(null);
  const [paymentSuccess, setPaymentSuccess]  = useState(null);


  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 const history = useHistory();
 const location = useLocation();
 let {from}= location.state || { from : {pathname:"/shipmentDetails"}};
  useEffect(() => {
    if (!stripe) {
      
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
console.log('ClientScret is = ',clientSecret)
    if (!clientSecret) {
      return;
      
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!stripe || !elements) {
    
      return;
    }
   
     setIsLoading(true);
const cardElement =elements.getElement(CardElement)
    const{error, paymentMethod} = await stripe.createPaymentMethod({
      //`Elements` instance that was used to create the Payment Element
      type:'card',
      card: cardElement,
    });
    // setIsLoading(true);

    // const {error , paymentMethod} = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
       
    //     return_url: "http://localhost:3000",
    //   },
    // });
 //if (error.type === "card_error" || error.type === "validation_error") 
     
    if (error) {
      console.log(error)
      setMessage(error.message);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
     // setMessage("An unexpected error occurred.");
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
           toast.success("successfully LoggedIn",{
        position:"top-right"
    });
      // alert("Payment Succesfully done ");
        console.log("[Payment method]", paymentMethod)
        // history.push('/shipmentDetails');
       history.replace(from);
        // return "http://localhost:3000/shipmentDetails"
    
    }

    setIsLoading(false);
  };

  // const paymentElementOptions = {
  //   layout: "tabs"
  // }

  return (
    <div>
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"
      />
      <CardElement/>
      {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}
      <br/>
       <button className="btn btn-primary" disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"> </div> : "Pay now"}
        </span>
      </button> 
     
      
      <ToastContainer/>
    </form>
    {
        paymentError &&  <h5 style={{color:"red"}}> {paymentError} </h5>
    }
    {
        paymentSuccess && <h5 style={{color:"green"}}> Your Payment is successfully done </h5>
    }
    </div>

  );
}