import { useParams } from "react-router-dom";
import useFetch from "../features/products/useFetch";
import type { Product } from "../types/products";
import ProductGallery from "../components/product/ProductGallery";
import ProductContent from "../components/product/ProductContent";
import { useCart } from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const {
    products: product,
    loading,
    error,
  } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);

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
    <div className="container-rest">
      <div className="py-12 grid grid-cols-2 gap-16">
        <div>
          <ProductGallery product={product} />
        </div>
        <div>
          <ProductContent
            product={product}
            productId={id}
            onAddToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
