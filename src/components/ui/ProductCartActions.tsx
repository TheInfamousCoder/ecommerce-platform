import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

type Props = {
  onAddToCart: () => void;
  productId: number;
};

const ProductCartActions = ({ onAddToCart, productId }: Props) => {
  const { cart, removeFromCart } = useCart();
  const isProduct = cart.find((item) => item.id === productId);
  return (
    <div className="flex-item-row-default gap-3 mt-3">
      {isProduct ? (
        <button
          type="button"
          className="add-cart-btn hover:bg-white hover:text-primary transition-[background-color,color] duraton-300 bg-[#663399]"
          onClick={() => removeFromCart(productId)}
        >
          Remove from cart
        </button>
      ) : (
        <button
          type="button"
          className="add-cart-btn hover:bg-white hover:text-primary transition-[background-color,color] duraton-300"
          onClick={onAddToCart}
        >
          Add To Cart
        </button>
      )}

      <Link
        to={`/products/${productId}`}
        type="button"
        className="view-details-btn hover:bg-primary hover:text-white transition-[background-color,color] duraton-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCartActions;
