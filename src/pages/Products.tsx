import useSWR from "swr";
import { fetcher, slugit } from "../helpers";
import { Product } from "../types/Product";
import { Link } from "react-router";

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR<Product[]>("https://fakestoreapi.com/products", fetcher);
  return (
    <>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* <p>{products && <pre>{JSON.stringify(products, null, 2)}</pre>}</p> */}
      <ul className="products">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}/${slugit(product.title)}`}>
                <div className="img-container">
                  <img src={product.image} alt={product.title} />
                </div>
                <p>{product.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Products;
