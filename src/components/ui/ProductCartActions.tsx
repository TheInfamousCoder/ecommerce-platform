type Props = {
  onAddToCart: () => void;
};

const ProductCartActions = ({ onAddToCart }: Props) => {
  return (
    <div className="flex-item-row-default gap-3 mt-3">
      <button
        type="button"
        className="add-cart-btn hover:bg-white hover:text-primary transition-[background-color,color] duraton-300"
        onClick={onAddToCart}
      >
        Add To Cart
      </button>
      <button
        type="button"
        className="view-details-btn hover:bg-primary hover:text-white transition-[background-color,color] duraton-300"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCartActions;
