import { EyeIcon, HeartIcon } from "lucide-react";

const ProductHoverActions = () => {
  return (
    <div className="absolute top-3 right-3 flex-item-col-default gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <button type="button" className=" cursor-pointer w-fit">
        <HeartIcon className="action-icon " />
      </button>

      <button type="button" className=" cursor-pointer w-fit">
        <EyeIcon className="action-icon " />
      </button>
    </div>
  );
};

export default ProductHoverActions;
