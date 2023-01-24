import './Product-details.css';

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
  console.log('soy imagen', productImage); // FIXME:
  return (
    <div className="col-product">
      <figure className="product-image">
        <img src={productImage} alt={productName} />
        <div className="product-description">
          <h1>{productName}</h1>
          <p className="product-code">
            Product code
            {productCode}
          </p>
        </div>
      </figure>
    </div>
  );
}

export default ProductDetails;
