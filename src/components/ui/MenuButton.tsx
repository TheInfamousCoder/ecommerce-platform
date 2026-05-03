import { User2Icon } from "lucide-react";

const MenuButton = () => {
  return (
    <button
      type="button"
      className="w-10 h-10 rounded-full p-2 bg-gray-300 flex items-center justify-center group cursor-pointer"
    >
      <User2Icon
        className="w-8 h-8 group-hover:scale-110 transition-all duration-300"
        strokeWidth={1}
      />
    </button>
  );
};

export default MenuButton;
