import IDiscount from './discount';
import { IPricingRules } from './pricingRules';
import IProduct from './product';

class Checkout {
  discounts: IDiscount[];

  products: IProduct[];

  currency: string;

  constructor(pricingRules: IPricingRules) {
    this.discounts = pricingRules.discounts;

    this.products = pricingRules.products;

    this.currency = '€';
  }

  scan?(productID: string): IProduct[] {
    this.products = this.products.map((item: IProduct) => {
      if (item.code === productID) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    return this.products;
  }

  remove?(productID: string): IProduct[] {
    this.products = this.products.map((item: IProduct) => {
      if (item.code === productID) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    return this.products;
  }

  totalProducts?(): number {
    let productNum = 0;

    this.products.forEach((item) => {
      productNum += item.quantity;
    });

    return productNum;
  }

  totalPriceWithoutDisc?(): number {
    let productPrice = 0;

    this.products.forEach((item) => {
      productPrice += item.quantity * item.price;
    });

    return productPrice;
  }

  totalDiscounts?(): number {
    let discountNum = 0;

    this.discounts.forEach((item) => {
      discountNum += item.getDiscount(this.products);
    });

    return discountNum;
  }

  total(): number {
    if (this.totalPriceWithoutDisc && this.totalDiscounts) {
      return this.totalPriceWithoutDisc() - this.totalDiscounts();
    }
    return 0;
  }
}

export default Checkout;
