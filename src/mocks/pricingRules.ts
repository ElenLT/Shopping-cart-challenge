import { IPricingRules } from 'models/pricingRules';
import IProduct from 'models/product';

const pricingRules: IPricingRules = {
  products: [
    {
      name: 'Cabify Cap',
      code: 'CAP',
      price: 5,
      image: 'cap.png',
      quantity: 0,
    },
    {
      name: 'Cabify Coffee Mug',
      code: 'MUG',
      price: 7.5,
      image: 'mug.png',
      quantity: 0,
    },
    {
      name: 'Cabify T-Shirt',
      code: 'TSHIRT',
      price: 20,
      image: 'shirt.png',
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
          return Math.floor(capItem.quantity / 2) * capItem.price;
        }
        return 0;
      },
    },

    {
      discountName: 'x3 T-Shirt Offer',
      getDiscount(checkoutList: IProduct[]) {
        const tshirtItem = checkoutList.find(
          (item: IProduct) => item.code === 'TSHIRT'
        );

        if (!tshirtItem) return 0;

        if (tshirtItem.quantity >= 3) {
          return tshirtItem.quantity * (tshirtItem.price * 0.05);
        }
        return 0;
      },
    },
  ],
  currency: '€'
};

export default pricingRules;
