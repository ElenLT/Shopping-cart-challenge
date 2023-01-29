import './checkout.page.css';
import ShoppingCart from 'components/shopping-cart/Shopping-cart';
import OrderSummary from 'components/order-summary/Order-Summary';

function CheckoutPage() {
  return (
    <main className="App">
      <ShoppingCart />
      <OrderSummary />
    </main>
  );
}

export default CheckoutPage;
