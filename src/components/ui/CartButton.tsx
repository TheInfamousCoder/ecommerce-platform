import { ShoppingCartIcon } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { cart } = useCart();

  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  return (
    <Link
      to="/cart"
      className="relative flex items-center cursor-pointer group"
    >
      <ShoppingCartIcon className="w-8 h-8" strokeWidth={1} />
      {totalItems > 0 && (
        <span className="cart-badge bg-primary text-white">{totalItems}</span>
      )}
    </Link>
  );
};

export default CartButton;
