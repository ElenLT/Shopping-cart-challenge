import IDiscount from './discount';
import IProduct from './product';

export interface IPricingRules {
  products: IProduct[];
  discounts: IDiscount[];
  currency: string;
}
