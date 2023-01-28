import React from 'react';
import './App.css';
import CheckoutProvider from 'context/CheckoutProvider';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <CheckoutProvider>
      <Checkout />
    </CheckoutProvider>
  );
}

export default App;
