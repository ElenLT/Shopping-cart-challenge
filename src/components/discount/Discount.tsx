import { CheckoutContext, CheckoutContextProps } from 'context/CheckoutContext';
import IDiscount from 'models/discount';
import { useContext } from 'react';
import './discount.css';

interface DiscountProps {
  discount: IDiscount;
}

function Discount({ discount }: DiscountProps) {
  const { discountName, getDiscount } = discount;
  const { checkoutContext } = useContext(
    CheckoutContext
  ) as CheckoutContextProps;
  return (
    <li>
      <span>{discountName}</span>
      <span>
        {getDiscount(checkoutContext.products)}{checkoutContext.currency}
      </span>
    </li>
  );
}

export default Discount;
