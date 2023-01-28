import DiscountList from 'components/discount-list/Discount-list';
import TotalCost from 'components/total-costs/Total-costs';
import Button from 'components/button/Button';
import './order-summary.css';
import Heading from 'components/heading/Heading';
import ItemsSummary from 'components/items-summary/Items-summary';

function OrderSummary() {
  const myDiscounts = [
    { discountName: '2x1 Mug offer', discountValue: 7.5 },

    { discountName: 'x3 Shirt offer', discountValue: 3 },
  ];
  const totalItems = '11 items';
  const totalPrice = 120;
  const currency = '€';
  return (
    <aside className="summary">
      <Heading>Order Summary</Heading>
      <ItemsSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
        currency={currency}
      />
      <DiscountList discounts={myDiscounts} />

      <TotalCost />
      <Button>Checkout</Button>
    </aside>
  );
}

export default OrderSummary;
