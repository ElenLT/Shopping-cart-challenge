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
        {discounts.map((item) => {
          return (
            <Discount
              key={item.discountName}
              discount={item}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DiscountList;
