import useFetch from "../../features/products/useFetch";

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const { products: categories } = useFetch<string[]>(
    "https://fakestoreapi.com/products/categories",
  );

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
      </div>
    </div>
  );
};

export default CategoryFilter;
