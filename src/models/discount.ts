import IProduct from './product';

interface IDiscount {
  discountName: string;
  getDiscount: (products: IProduct[]) => number;
}

export default IDiscount;
