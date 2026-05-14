import CategoryFilter from "./CategoryFilter";

const ProductSidebar = ({ selectedCategories, setSelectedCategories }) => {
  return (
    <div>
      <CategoryFilter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
};

export default ProductSidebar;
