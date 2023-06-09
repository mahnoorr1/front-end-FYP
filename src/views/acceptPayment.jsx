// PaymentForm.js
import React, { useState, useEffect } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button, TextField } from '@mui/material';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const PaymentForm = () => {
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [cardHolderName, setCardHolderName] = useState('');
  console.log("\n\n\n\ninside payment");
  
  const stripe = useStripe();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      console.log("RETURNNN");
      return;
    }
    console.log("Inside Submit");
    const cardElement = elements.getElement(CardElement);
    
    // Get references to the card elements
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: cardNumberElement,
  //     billing_details: {
  //       card: {
  //         exp_month: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[0],
  //         exp_year: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[1].trim(),
  //       }
  //     }
  //   });

  //   if (error) {
  //     console.log('Error:', error.message);
  //     setPaymentError(error.message);
  //     setPaymentSuccess(null);
  //   } else {
  //     console.log("success");
  //     setPaymentError(null);
  //     setPaymentSuccess('Payment successful');
  //     // Send paymentMethod.id to your server for processing
  //     processPayment(paymentMethod.id);
  //   }
  // };

  // const processPayment = async (paymentMethodId) => {
  //   try {
  //     const response = await fetch('http://localhost:3000/payment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ token: paymentMethodId, amount: 100 }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log('Error:', error.message);
  //   }
  const month = cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[0];
  const year = cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[1].trim();
  const number = cardNumberElement.value;
  const cvc = cardCvcElement.value;
  console.log(number);
  console.log("\n"+cvc+"\n"+year+"\n"+month)
    const response = await fetch('http://localhost:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 100, // $10 in cents
        currency: 'usd',
        cardHolderName,
        number,
        month,
        year,
        cvc,
      }),
    });
    if (response.ok) {
      const { clientSecret } = await response.json();
      console.log("\n\n\n\ninside response");

      // Use Stripe.js to confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            cardholderName: cardHolderName,
            number: cardNumberElement.value,
            exp_month: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[0],
            exp_year: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[1].trim(),
            cvc: cardCvcElement.value,
          },
        },
      });

      if (result.error) {
        // Payment failed
        console.error(result.error.message);
      } else {
        // Payment successful
        console.log('Payment successful!');
      }
    } else {
      // Payment failed
      console.error('Payment failed!');
    }
  };
  const elementStyles = {
    base: {
      fontSize: '20px',
      color: 'black',
      '::placeholder': {
        color: '#a0aec0',
      },
      padding: '12px',
      borderRadius: '4px',
      border: '1px solid white',
      
    },
  };

  return (
    <div className='App-header' style={{  fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      <form onSubmit={handleSubmit} 
        style={{
          border:'1',
          borderRadius:30,
          borderStyle: 'solid',
          borderColor: 'rgb(140, 155, 174)',
          padding:30,
          width:'30%',
          backgroundColor: 'white'
          
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: 'black' }}>
            Pay For Subscription
          </label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: '10px', fontSize: '50px', color: '#45D69E' }} />
          </div>
        </div>
        <div style={{ marginBottom: '7%' , display:'flex' , flexDirection:'column' }}>
          <TextField
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            label='Card Holder Name'
            sx={{border: "solid transparent 2px" , color:'white'}}
            variant="outlined"
            InputLabelProps={{ 
              style: { 
                color: 'grey' , fontSize:'18px'
              } }}
            inputProps={{ 
              style: { 
                color: 'black' ,fontSize:'18px' 
              } }}
             />
        </div>
        <div style={{ marginBottom: '7%' }}>
          <label style={{
            fontSize: '18px',
            color: 'grey'
          }}>
            Card number
          </label>
          <CardNumberElement options={{ style: elementStyles }} />
        </div>
        <div style={{ marginBottom: '7%' }}>
          <label style={{  
            marginBottom: '5%',
            fontSize: '18px',
            color: 'grey'}}>
            Expiration date
          </label>
          <CardExpiryElement options={{ style: elementStyles }} />
        </div>
        <div style={{ marginBottom: '7%' }}>
          <label style={{  marginBottom: '5%', fontSize: '18px',
          color: 'grey' }}>
            CVC
          </label>
          <CardCvcElement options={{ style: elementStyles }} />
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: '#45D69E',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            width:'35%',
            height:'25%',
            fontSize:'18px'
          }}
          // disabled = {cardHolderName == null}
        >
          PAY NOW
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
