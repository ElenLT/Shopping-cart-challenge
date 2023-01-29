import React, { useState } from 'react';
import './counter-button.css';

interface CounterButtonProps {
  productQuantity: number;
  onChangeCounter: (counter: number, operation: string) => void
}

function CounterButton({ productQuantity, onChangeCounter }: CounterButtonProps) {
  const [counter, setCounter] = useState(productQuantity);

  const handleClick = (increment: number, operation: string) => {
    const newCounter = counter + increment;
    if (newCounter < 0) return;
    setCounter(newCounter);
    onChangeCounter(newCounter, operation);
  };
  return (
    <div className="col-quantity">
      <button type="button" className="count" onClick={() => handleClick(-1, 'remove')}>
        -
      </button>
      <input type="text" className="product-quantity" value={counter} />
      <button type="button" className="count" onClick={() => handleClick(+1, 'add')}>
        +
      </button>
    </div>
  );
}

export default CounterButton;
