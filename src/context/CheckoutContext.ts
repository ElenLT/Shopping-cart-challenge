import { createContext } from 'react';
import Checkout from 'models/checkout';

export interface CheckoutContextProps {
  checkoutContext: Checkout;
  setCheckoutContext: (value: Checkout) => void;
}

export const CheckoutContext = createContext({});
