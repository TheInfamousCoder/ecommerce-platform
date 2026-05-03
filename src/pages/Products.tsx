import PageBanner from "../components/PageBanner";
import ProductCard from "../components/ui/ProductCard";
import useFetchProducts from "../features/products/useFetchProducts";
import type { Product } from "../types/products";

const Products = () => {
  const { products, loading, error } = useFetchProducts<Product>(
    "https://fakestoreapi.com/products",
  );

  return (
    <div>
      <PageBanner>
        <h1 className="text-6xl font-bold text-white">Products</h1>
      </PageBanner>

      <div className="container-rest py-18">
        {loading ? (
          <p className="text-center text-gray-600">Fetching products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
