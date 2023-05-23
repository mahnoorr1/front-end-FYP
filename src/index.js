import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardProfile from './views/profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CreateRoadPlan from './views/createRoadPlan';
import PaymentForm from './views/acceptPayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { RoadPlanProvider } from './context/roadPlanContext';
const stripePromise = loadStripe('pk_test_51NAEw6Apl2m6sshaxUhU5fLcS4mc6g9Zrnq7rFbOAmzWyn2z3c4a175P7AY4hMKts0cbLUb2eoYchrRLKUBsAAfd005AZdXoZ0');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <RoadPlanProvider>
      <App/>
     </RoadPlanProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
