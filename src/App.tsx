import React, { useContext, useEffect } from 'react';
import { CheckoutContext, CheckoutContextProps } from 'context/CheckoutContext';
import Checkout from 'models/checkout';
import pricingRules from 'mocks/pricingRules';
import CheckoutPage from 'pages/Checkout/Checkout.page';

function App() {
  const { checkoutContext, setCheckoutContext } = useContext(
    CheckoutContext
  ) as CheckoutContextProps;

  useEffect(() => {
    const checkout = new Checkout(pricingRules);
    setCheckoutContext(checkout);
  }, []);

  return <CheckoutPage />;
}

export default App;
