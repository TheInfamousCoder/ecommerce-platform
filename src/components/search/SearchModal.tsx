import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  disposeModal: () => void;
};

const SearchModal = ({ disposeModal }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDispose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        disposeModal();
      }
    };

    window.addEventListener("keydown", onKeyDispose);

    inputRef.current?.focus();

    // Disable body scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scroll
      document.body.style.overflow = "auto";
      // Remove event listener
      window.removeEventListener("keydown", onKeyDispose);
    };
  }, [disposeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] lg:max-w-4xl  bg-white rounded-2xl py-12 px-5 mt-30 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <form className="p-3">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              name="search"
              id="search"
              placeholder="Search products"
              className="border border-neutral-300 w-full rounded-md pe-2 ps-12 py-3 outline-none focus:border-primary"
            />

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>

          <button
            type="button"
            onClick={disposeModal}
            className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-primary flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default SearchModal;
