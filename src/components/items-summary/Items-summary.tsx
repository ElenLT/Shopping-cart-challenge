import './items-summary.css';

interface ItemsSummaryProps {
  totalItems: number;
  totalPrice: number;
  currency: string;
}

function ItemsSummary({ totalItems, totalPrice, currency }: ItemsSummaryProps) {
  return (
    <ul className="summary-items wrapper border">
      <li>
        <span className="summary-items-number">
          {totalItems} Items
        </span>
        <span className="summary-items-price">
          {totalPrice}{currency}
        </span>
      </li>
    </ul>
  );
}

export default ItemsSummary;
