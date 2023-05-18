import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentScreen from './PaymentScreen';

const stripePromise = loadStripe('pk_test_51N7By5H8eHCgKDyR3bb25RIfDUQ3aQrnsSdxty9rhfAGkA2aok03vBQ1y56EpZmjVcRuiOV2rc02l0HzxE3X849R006aEaQc2o');

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentScreen />
    </Elements>
  );
};

export default Payment;
