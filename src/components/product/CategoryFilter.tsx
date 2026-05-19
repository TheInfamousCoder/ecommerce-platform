import { useMemo } from "react";
import useFetch from "../../features/products/useFetch";
import type { Product } from "../../types/products";

type Props = {
  products: Product[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryFilter = ({
  products,
  selectedCategories,
  setSelectedCategories,
}: Props) => {
  const {
    products: categories,
    loading,
    error,
  } = useFetch<string[]>("https://fakestoreapi.com/products/categories");

  const skeletonCount = useMemo(() => {
    if (categories?.length) return categories.length;
    if (products.length === 0) return 0;
    return new Set(products.map((product) => product.category)).size;
  }, [categories, products]);

  const handleSelectedCategory = (category: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="mb-5">
      <div className="bg-white p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-3">Filter by Category</h3>

        {loading ? (
          <ul
            className="animate-pulse"
            aria-busy="true"
            aria-label="Loading categories"
          >
            {Array.from({ length: skeletonCount }).map((_, idx) => (
              <li key={idx} className="flex gap-2 items-center mb-3">
                <div className="w-4 h-4 bg-neutral-400 rounded shrink-0" />
                <div className="h-5 bg-neutral-400 rounded w-28" />
              </li>
            ))}
          </ul>
        ) : error ? (
          <p className="text-red-500" role="alert">
            {error}
          </p>
        ) : (
          <ul>
            {categories?.map((category) => {
              const categoryId = category.replace(/\s+/g, "-");
              return (
                <li key={category} className="text-xl mb-3">
                  <label
                    htmlFor={categoryId}
                    className="flex gap-1 items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="Category"
                      id={categoryId}
                      className="mb-0.5 w-4 h-4"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleSelectedCategory(category)}
                    />
                    <span className="capitalize">{category}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
