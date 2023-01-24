import IDiscount from '../../models/discount';
import './discount.css';

function Discount({ discountName, discountValue }: IDiscount) {
  return (
    <li>
      <span>{discountName}</span>
      <span>{discountValue}</span>
    </li>
  );
}

export default Discount;
