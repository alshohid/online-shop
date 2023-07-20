import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51MjyyoHNTYgWlXgoQnk8DUxqMa74VVzlWvIFS9ZHlba40k0GHNAd7JC7BD5p6q35z0Wdar4UU6f2ZsmFwMvYUWK300kyuBDW7U');

export default function ProcessPayment({handlePayment}) {

  return (
     <Elements stripe={stripePromise}  >
      <SimpleCardForm handlePayment={handlePayment}/>  
    </Elements>
  )
}
