import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentScreen.css'
import '../App.css';

const PaymentScreen = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to the CardElement
    const cardElement = elements.getElement(CardElement);

    // Create a payment method using the card details entered by the user
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Payment Method:', paymentMethod);
      // Handle successful payment
    }
  };

  return (
    <div className='App'>
    <form onSubmit={handleSubmit}>
      <label>
        Card details
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
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
  );
};

export default PaymentScreen;
