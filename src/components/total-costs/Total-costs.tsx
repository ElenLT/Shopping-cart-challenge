import './total-costs.css';

interface TotalCostProps {
  totalPrice: number;
  currency: string;
}

function TotalCost({ totalPrice, currency }: TotalCostProps) {
  return (
    <div className="summary-total wrapper">
      <ul>
        <li>
          <span className="summary-total-cost">Total cost</span>
          <span className="summary-total-price">{totalPrice}{currency}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default TotalCost;
