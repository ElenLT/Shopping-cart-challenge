import './items-summary.css';

interface ItemsSummaryProps {
  totalItems: string; // TODO:
  totalPrice: number;
  currency: string;
}

function ItemsSummary({ totalItems, totalPrice, currency }: ItemsSummaryProps) {
  return (
    <ul className="summary-items wrapper border">
      <li>
        <span className="summary-items-number">{totalItems}</span>
        <span className="summary-items-price">
          {totalPrice}
          <span className="currency">{currency}</span>
        </span>
      </li>
    </ul>
  );
}

export default ItemsSummary;
