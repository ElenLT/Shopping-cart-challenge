import './shopping-cart-header.css';

function ShoppingCartHeader() {
  // TODO: SHOPPING CART PRODUCT HEADER - REUSE
  return (
    <ul className="products-list tableHead">
      <li className="products-list-title row">
        <div className="col-product">Product details</div>
        <div className="col-quantity">Quantity</div>
        <div className="col-price">Price</div>
        <div className="col-total">Total</div>
      </li>
    </ul>
  );
}
export default ShoppingCartHeader;
