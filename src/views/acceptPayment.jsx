// PaymentForm.js
import React, { useState, useEffect } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, TextField } from '@mui/material';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51NAEw6Apl2m6sshaxUhU5fLcS4mc6g9Zrnq7rFbOAmzWyn2z3c4a175P7AY4hMKts0cbLUb2eoYchrRLKUBsAAfd005AZdXoZ0');

const PaymentForm = () => {
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [cardHolderName, setCardHolderName] = useState('');
  console.log("\n\n\n\ninside payment");
  const HandleSubmit = async (event) => {
    // event.preventDefault();
    const stripe = useStripe();
    if (!stripe || !elements) {
      return;
    }

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
    const response = await fetch('http://localhost:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 1000, // $10 in cents
        cardHolderName,
        cardNumberElement,
        cardExpiryElement,
        cardCvcElement,
      }),
    });
    if (response.ok) {
      const { clientSecret } = await response.json();

      // Use Stripe.js to confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            cardholderName: cardHolderName,
            number: cardNumberElement,
            exp_month: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[0],
            exp_year: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[1].trim(),
            cvc: cardCvcElement,
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
      
      <form onSubmit={HandleSubmit} 
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
            Accepted Payment Methods
          </label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: '10px', fontSize: '50px', color: '#37C790' }} />
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
          onClick={HandleSubmit}
          style={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            width:'35%',
            height:'25%',
            fontSize:'18px'
          }}
          disabled = {cardHolderName == null}
        >
          PAY NOW
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
