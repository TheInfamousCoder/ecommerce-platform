import type { Product } from "../../types/products";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter, { type SortOption } from "./SortFilter";

type Props = {
  products: Product[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  value: SortOption;
  onValueChange: (value: SortOption) => void;
};

const ProductSidebar = ({
  products,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  value,
  onValueChange,
}: Props) => {
  return (
    <div>
      <CategoryFilter
        products={products}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <PriceFilter
        products={products}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <SortFilter value={value} onValueChange={onValueChange} />
    </div>
  );
};

export default ProductSidebar;
