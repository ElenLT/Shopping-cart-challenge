import IProduct from '../../models/product';
import CounterButton from '../counter-button/Counter-button';
import ProductDetails from '../product-details/Product-details';
import './shopping-cart-product-row.css';

interface ShoppingCartRowProps {
  product: IProduct;
}

function ShoppingCartRow({ product }: ShoppingCartRowProps) {
  const productQuantity = 0;
  return (
    <li className="product row">
      <ProductDetails
        productImage={product.image}
        productCode={product.code}
        productName={product.name}
      />
      <CounterButton productQuantity={productQuantity} />
      <div className="col-price">
        <span className="product-price">{product.price}</span>
        <span className="product-currency currency">{product.currency}</span>
      </div>
      <div className="col-total">
        <span className="product-price">{product.price * productQuantity}</span>
        <span className="product-currency currency">{product.currency}</span>
      </div>
    </li>
  );
}

export default ShoppingCartRow;
