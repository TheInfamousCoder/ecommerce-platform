import { Search } from "lucide-react";
import { useState } from "react";
import SearchModal from "../search/SearchModal";

const SearchButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const disposeModal = (): void => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        type="button"
        className="w-10 h-10 rounded-full   flex items-center justify-center group cursor-pointer"
      >
        <Search
          className="w-8 h-8 group-hover:scale-110 transition-all duration-300"
          strokeWidth={1}
          onClick={triggerModal}
        />
      </button>
      {isModalOpen && <SearchModal disposeModal={disposeModal} />}
    </>
  );
};

export default SearchButton;
