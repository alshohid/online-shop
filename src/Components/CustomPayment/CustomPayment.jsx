import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

 
import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MjyyoHNTYgWlXgoQnk8DUxqMa74VVzlWvIFS9ZHlba40k0GHNAd7JC7BD5p6q35z0Wdar4UU6f2ZsmFwMvYUWK300kyuBDW7U");

export default function CustomPayment({handlePayment}) {
  const [clientSecret, setClientSecret] = useState("");
console.log('Client Secret in customPayment ',clientSecret)
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const details= {name:" Laptop", price:300}
    fetch("http://localhost:4000/shipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log( "Ki ki data passi ", data)
        console.log('payment id = ',data.paymentId)
     setClientSecret(data.clientSecret)
      })
  
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className= "row"> 
    <div className="col-lg-8 d-block m-auto">
   <div className="payment-form ">
         <h4>Payment</h4>
      { clientSecret &&( <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>  )
        
      }
    </div>
    </div>
    </div>
   
  );
}

// clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm handlePayment={handlePayment}/>
//         </Elements>