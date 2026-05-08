import { useParams } from "react-router-dom";
import useFetch from "../features/products/useFetch";
import type { Product } from "../types/products";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    products: product,
    loading,
    error,
  } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);

  console.log(product);

  if (loading) {
    return <div>Fetching product details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
