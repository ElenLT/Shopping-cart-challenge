import ShoppingCartHeader from 'components/shopping-cart-header/Shopping-cart-header';
import ShoppingCartRow from 'components/shopping-cart-product-row/Shopping-cart-product-row';
import './shopping-cart.css';

function ShoppingCart() {
  const myProducts = [
    {
      name: 'Cabify Cap',
      code: 'CAP',
      price: 5,
      currency: '€',
      image: './assets/img/cap.png',
    },
    {
      name: 'Cabify Coffee Mug',
      code: 'MUG',
      price: 7.5,
      currency: '€',
      image: './assets/img/mug.png',
    },
    {
      name: 'Cabify T-Shirt',
      code: 'SHIRT',
      price: 20,
      currency: '€',
      image: './assets/img/shirt.png',
    },
  ]; // TODO: viene dado por la clase checkout

  return (
    <section className="products">
      <h1 className="main">Shopping cart</h1>

      <ShoppingCartHeader />

      <ul className="products-list">
        {myProducts.map((item) => (
          <ShoppingCartRow product={item} />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingCart;
