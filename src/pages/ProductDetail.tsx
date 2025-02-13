import { fetcher } from "../helpers";
import useSWR from "swr";
import type { Product } from "../types/Product";
import { useParams } from "react-router";
const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, error } = useSWR<Product>(
    `https://fakestoreapi.com/products/${id}`,
    fetcher
  );
  return (
    <>
      {error && <p>error.message</p>}
      {product && (
        <div className="product-detail">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="img-container">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetail;
