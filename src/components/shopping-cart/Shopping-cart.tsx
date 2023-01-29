import Heading from 'components/heading/Heading';
import ShoppingCartHeader from 'components/shopping-cart-header/Shopping-cart-header';
import ShoppingCartRow from 'components/shopping-cart-product-row/Shopping-cart-product-row';
import { CheckoutContext, CheckoutContextProps } from 'context/CheckoutContext';
import { useContext } from 'react';
import './shopping-cart.css';

function ShoppingCart() {
  const { checkoutContext } = useContext(
    CheckoutContext
  ) as CheckoutContextProps;
  const { products } = checkoutContext;
  return (
    <section className="products">
      <Heading>Shopping cart</Heading>

      <ShoppingCartHeader />

      <ul className="products-list">
        {products && products.map((item) => <ShoppingCartRow key={item.code} product={item} />)}
      </ul>
    </section>
  );
}

export default ShoppingCart;
