import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <button
      type="button"
      className="w-10 h-10 rounded-full   flex items-center justify-center group cursor-pointer"
    >
      <Search
        className="w-8 h-8 group-hover:scale-110 transition-all duration-300"
        strokeWidth={1}
      />
    </button>
  );
};

export default SearchButton;
