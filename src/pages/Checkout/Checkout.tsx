import './Checkout.css';
import ShoppingCart from 'components/shopping-cart/Shopping-cart';
import OrderSummary from 'components/order-summary/Order-Summary';

function Checkout() {
  return (
    <main className="App">
      <ShoppingCart />
      <OrderSummary />
    </main>
  );
}

export default Checkout;
