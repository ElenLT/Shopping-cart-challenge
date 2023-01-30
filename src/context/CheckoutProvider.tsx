import { ReactNode, useMemo, useState } from 'react';
import { CheckoutContext } from './CheckoutContext';

interface Props {
  children: ReactNode;
}

function CheckoutProvider({ children }: Props) {
  const [checkoutContext, setCheckoutContext] = useState({});

  return (
    <CheckoutContext.Provider
      value={useMemo(
        () => ({ checkoutContext, setCheckoutContext }),
        [checkoutContext]
      )}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
