import DiscountList from 'components/discount-list/Discount-list';
import TotalCost from 'components/total-costs/Total-costs';
import Button from 'components/button/Button';
import './order-summary.css';

function OrderSummary() {
  const myDiscounts = [
    { discountName: '2x1 Mug offer', discountValue: 7.5 },

    { discountName: 'x3 Shirt offer', discountValue: 3 },
  ];

  return (
    <aside className="summary">
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">11 Items</span>
          <span className="summary-items-price">
            120
            <span className="currency">€</span>
          </span>
        </li>
      </ul>

      <DiscountList discounts={myDiscounts} />

      <TotalCost />
      <Button>Checkout</Button>
    </aside>
  );
}

export default OrderSummary;
