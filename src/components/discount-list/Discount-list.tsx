import Discount from 'components/discount/Discount';
import IDiscount from 'models/discount';
import './discount-list.css';

interface DiscountListProps {
  discounts: IDiscount[];
}

function DiscountList({ discounts }: DiscountListProps) {
  return (
    <div className="summary-discounts wrapper-half border">
      <h2>Discounts</h2>
      <ul>
        {discounts.map((item) => (
          <Discount
            discountName={item.discountName}
            discountValue={item.discountValue}
          />
        ))}
      </ul>
    </div>
  );
}

export default DiscountList;
