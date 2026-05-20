import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";
type Props = {
  disposeModal: () => void;
};

const SearchModal = ({ disposeModal }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="w-4xl bg-white rounded-2xl py-12 px-5 absolute top-30 bottom-30 left-0 right-0 z-100 mx-auto transition-all">
        <div className="p-3">
          <form>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                name="search"
                id="search"
                placeholder="Search products"
                className="border border-neutral-300 w-full rounded-md pe-2 ps-12 py-2"
              />
              <Search className="absolute left-2 top-[20%] text-neutral-400" />
            </div>

            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-primary flex justify-center items-center">
              <X className="text-primary" onClick={() => disposeModal()} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
