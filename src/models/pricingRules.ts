import IDiscount from './discount';
import IProduct from './product';

export interface IPricingRules {
  products: IProduct[];
  discounts: IDiscount[]; // CAMBIAR
}

const pricingRules: IPricingRules = {
  products: [
    {
      name: 'Cabify Cap',
      code: 'CAP',
      price: 5,
      currency: '€',
      image: './assets/img/cap.png',
      quantity: 0,
    },
    {
      name: 'Cabify Coffee Mug',
      code: 'MUG',
      price: 7.5,
      currency: '€',
      image: './assets/img/mug.png',
      quantity: 0,
    },
    {
      name: 'Cabify T-Shirt',
      code: 'TSHIRT',
      price: 20,
      currency: '€',
      image: './assets/img/shirt.png',
      quantity: 0,
    },
  ],

  discounts: [
    {
      discountName: '2x1 Cap Discount',
      getDiscount(checkoutList: IProduct[]) {
        const capItem = checkoutList.find(
          (item: IProduct) => item.code === 'CAP'
        );
        if (!capItem) return 0;

        if (capItem.quantity >= 2) {
          this.isApplicable = true;
          return Math.floor(capItem.quantity / 2) * capItem.price;
        }
        this.isApplicable = false;
        return 0;

        // discount applied (not final price with discount)
        // mock
      },
      isApplicable: false,
    },

    {
      discountName: 'x3 Tshirt offer',
      getDiscount(checkoutList: IProduct[]) {
        const tshirtItem = checkoutList.find(
          (item: IProduct) => item.code === 'TSHIRT'
        );

        if (!tshirtItem) return 0;

        if (tshirtItem.quantity >= 3) {
          this.isApplicable = true;
          return tshirtItem.quantity * (tshirtItem.price * 0.05);
        }
        this.isApplicable = false;
        return 0;
      },
      isApplicable: false,
    },
  ],
};

export default pricingRules;
