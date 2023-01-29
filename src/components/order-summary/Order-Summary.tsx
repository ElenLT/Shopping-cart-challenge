import DiscountList from 'components/discount-list/Discount-list';
import TotalCost from 'components/total-costs/Total-costs';
import Button from 'components/button/Button';
import './order-summary.css';
import Heading from 'components/heading/Heading';
import ItemsSummary from 'components/items-summary/Items-summary';
import { CheckoutContext, CheckoutContextProps } from 'context/CheckoutContext';
import { useContext } from 'react';

function OrderSummary() {
  const { checkoutContext } = useContext(
    CheckoutContext
  ) as CheckoutContextProps;

  return (
    <aside className="summary">
      <Heading>Order Summary</Heading>
      {checkoutContext?.totalProducts
      && checkoutContext?.totalPriceWithoutDisc && (
        <>
          <ItemsSummary
            totalItems={checkoutContext.totalProducts()}
            totalPrice={checkoutContext.totalPriceWithoutDisc()}
            currency={checkoutContext.currency}
          />
          <DiscountList discounts={checkoutContext.discounts} />
          <TotalCost
            totalPrice={checkoutContext.total()}
            currency={checkoutContext.currency}
          />
          <Button>Checkout</Button>
        </>
      )}
    </aside>
  );
}

export default OrderSummary;
