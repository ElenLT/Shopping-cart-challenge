import './Checkout.css';
import ShoppingCart from 'components/shopping-cart/Shopping-cart';
import OrderSummary from 'components/order-summary/Order-Summary';
import { useContext } from 'react';
import { CheckoutContext, CheckoutContextProps } from 'context/CheckoutContext';

function Checkout() {
  const { checkoutContext, setCheckoutContext } = useContext(
    CheckoutContext
  ) as CheckoutContextProps;

  return (
    <main className="App">
      <ShoppingCart />
      <OrderSummary />
    </main>
  );
}

export default Checkout;
