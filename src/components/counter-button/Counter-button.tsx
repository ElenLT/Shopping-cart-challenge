import React, { useState } from 'react';
import './counter-button.css';

interface CounterButtonProps {
  productQuantity: number;
}

function CounterButton({ productQuantity }: CounterButtonProps) {
  // FIXME: NO SE NECESITA PRODUCTQUANTITY?
  const [counter, setCounter] = useState(productQuantity);

  const handleClick = (increment: number) => {
    const newCounter = counter + increment;
    if (newCounter < 0) return;
    setCounter(newCounter);
  };
  return (
    <div className="col-quantity">
      <button type="button" className="count" onClick={() => handleClick(-1)}>
        -
      </button>
      <input type="text" className="product-quantity" value={counter} />
      <button type="button" className="count" onClick={() => handleClick(+1)}>
        +
      </button>
    </div>
  );
}

export default CounterButton;

// conectar con el total
// onChange -> poder añadir el input
