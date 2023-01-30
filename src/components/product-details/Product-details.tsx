import './product-details.css';

interface ProductDetailsProps {
  productImage: string;
  productName: string;
  productCode: string;
}

function ProductDetails({
  productImage,
  productName,
  productCode,
}: ProductDetailsProps) {
  // eslint-disable-next-line global-require, @typescript-eslint/quotes, import/no-dynamic-require,
  const image = require(`../../assets/images/${productImage}`);
  return (
    <div className="col-product">
      <figure className="product-image">
        <img src={image} alt={productName} />
        <div className="product-description">
          <h1>{productName}</h1>
          <p className="product-code">Product code {productCode}
          </p>
        </div>
      </figure>
    </div>
  );
}

export default ProductDetails;
