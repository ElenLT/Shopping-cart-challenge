import { CheckoutContext, CheckoutContextProps } from 'context/CheckoutContext';
import Checkout from 'models/checkout';
import { useContext, useState } from 'react';
import IProduct from '../../models/product';
import CounterButton from '../counter-button/Counter-button';
import ProductDetails from '../product-details/Product-details';
import './shopping-cart-product-row.css';

interface ShoppingCartRowProps {
  product: IProduct;
}

function ShoppingCartRow({ product }: ShoppingCartRowProps) {
  const [productRow, setProductRow] = useState(product);

  const { checkoutContext, setCheckoutContext } = useContext(
    CheckoutContext
  ) as CheckoutContextProps;

  const {
    image, code, name, price, quantity
  } = productRow;

  const onChangeCounter = (counter: number, operation: string) => {
    setProductRow({
      ...productRow,
      quantity: counter
    });
    if (checkoutContext.scan && operation === 'add') {
      const newProducts = checkoutContext.scan(code);
      setCheckoutContext(new Checkout({
        products: newProducts,
        discounts: checkoutContext.discounts,
        currency: checkoutContext.currency,
      }));
    }

    if (checkoutContext.remove && operation === 'remove') {
      const newProducts = checkoutContext.remove(code);
      setCheckoutContext(
        new Checkout({
          products: newProducts,
          discounts: checkoutContext.discounts,
          currency: checkoutContext.currency
        })
      );
    }
  };

  return (
    <li className="product row">
      <ProductDetails
        productImage={image}
        productCode={code}
        productName={name}
      />
      <CounterButton
        productQuantity={quantity}
        onChangeCounter={onChangeCounter}
      />
      <div className="col-price">
        <span className="product-price">
          {price}
          {checkoutContext.currency}
        </span>
      </div>
      <div className="col-total">
        <span className="product-price">
          {price * quantity}{checkoutContext.currency}
        </span>
      </div>
    </li>
  );
}

export default ShoppingCartRow;
