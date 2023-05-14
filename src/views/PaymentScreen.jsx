import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../App.css'
import './PaymentScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@mui/material';

const PaymentScreen = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get references to the card elements
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const CardCvcElement = elements.getElement(CardCvcElement);

    // Create a payment method using the card details entered by the user
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
      billing_details: {
        card: {
          exp_month: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[0],
          exp_year: cardExpiryElement._frame.contentWindow.__private__.cardExpiryInput[0].value.split('/')[1].trim(),
        }
      }
    });

    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Payment Method:', paymentMethod);
      // Handle successful payment
    }
  };

  const elementStyles = {
    base: {
      fontSize: '24px',
      color: 'white',
      '::placeholder': {
        color: '#a0aec0',
      },
      padding: '12px',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
      
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
          width:'30%'
          
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Accepted Payment Methods
          </label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: '10px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '7%' , display:'flex' , flexDirection:'column' }}>
          <TextField
            label='Card Holder Name'
            sx={{border: "solid transparent 2px" , color:'white'}}
            variant="outlined"
            InputLabelProps={{ 
              style: { 
                color: 'white' , fontSize:'22px'
              } }}
            inputProps={{ 
              style: { 
                color: 'white' ,fontSize:'20px' 
              } }}
             />
        </div>
        <div style={{ marginBottom: '7%' }}>
          <label >
            Card number
          </label>
          <CardNumberElement options={{ style: elementStyles }} />
        </div>
        <div style={{ marginBottom: '7%' }}>
          <label style={{  marginBottom: '5%'}}>
            Expiration date
          </label>
          <CardExpiryElement options={{ style: elementStyles }} />
        </div>
        <div style={{ marginBottom: '7%' }}>
          <label style={{  marginBottom: '5%' }}>
            CVC
          </label>
          <CardCvcElement options={{ style: elementStyles }} />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
          
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;
