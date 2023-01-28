import { createContext } from 'react';
import ICheckout from 'models/checkout';

export interface CheckoutContextProps {
  checkoutContext: ICheckout;
  setCheckoutContext: (value: ICheckout) => void;
}

export const CheckoutContext = createContext({});
