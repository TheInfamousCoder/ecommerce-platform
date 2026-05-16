import type { Product } from "../../types/products";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

type Props = {
  products: Product[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
};

const ProductSidebar = ({
  products,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}: Props) => {
  return (
    <div>
      <CategoryFilter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <PriceFilter
        products={products}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </div>
  );
};

export default ProductSidebar;
