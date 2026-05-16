import { useState } from "react";
import PageBanner from "../components/PageBanner";
import ProductSidebar from "../components/product/ProductSidebar";
import ProductCard from "../components/ui/ProductCard";
import useFetch from "../features/products/useFetch";
import type { Product } from "../types/products";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const { products, loading, error } = useFetch<Product[]>(
    "https://fakestoreapi.com/products",
  );

  const filteredProducts = !products
    ? []
    : products.filter((product) => {
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category);

        const matchesPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesCategory && matchesPrice;
      });

  console.log(filteredProducts);

  return (
    <div>
      <PageBanner>
        <h1 className="text-6xl font-bold text-white">Products</h1>
      </PageBanner>

      <div className="container-rest py-18 grid grid-cols-1 lg:grid-cols-[0.5fr_2fr] gap-8">
        <div className="">
          <ProductSidebar
            products={products ?? []}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
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
            <>
              <div className="py-3 border-b mb-3 border-neutral-300 flex justify-between items-baseline">
                <p>
                  {selectedCategories.length > 0
                    ? selectedCategories
                        .map(
                          (category) =>
                            category.charAt(0).toUpperCase() +
                            category.slice(1),
                        )
                        .join(", ")
                    : "All Products"}
                </p>
                <p className="text-primary text-xl">
                  Items
                  <span className="text-neutral-500">
                    ({filteredProducts.length})
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
