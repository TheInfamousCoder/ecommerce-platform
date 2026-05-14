import { useState } from "react";
import PageBanner from "../components/PageBanner";
import ProductSidebar from "../components/product/ProductSidebar";
import ProductCard from "../components/ui/ProductCard";
import useFetch from "../features/products/useFetch";
import type { Product } from "../types/products";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { products, loading, error } = useFetch<Product[]>(
    "https://fakestoreapi.com/products",
  );

  const filteredProducts = !products
    ? []
    : selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category),
        );

  console.log(filteredProducts);

  return (
    <div>
      <PageBanner>
        <h1 className="text-6xl font-bold text-white">Products</h1>
      </PageBanner>

      <div className="container-rest py-18 grid grid-cols-1 lg:grid-cols-[0.5fr_2fr] gap-8">
        <div className="">
          <ProductSidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        <div className="">
          {loading ? (
            <p className="text-center text-gray-600">Fetching products...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : !filteredProducts || filteredProducts?.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
