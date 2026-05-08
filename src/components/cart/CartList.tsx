import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useCart();

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CartList;
