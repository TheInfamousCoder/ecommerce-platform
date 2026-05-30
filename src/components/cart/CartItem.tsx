import { Minus, Plus, Trash } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import type { CartItem as CartItemType } from "../../types/cart";
type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  const { handleDecrement, handleIncrement, removeFromCart } = useCart();
  const { id, image, title, category, price, quantity } = item;

  return (
    <div className="max-w-2xl">
      <div className="flex gap-3 items-start mb-4 px-3 py-4 bg-white rounded-2xl ">
        <div className="w-32 h-32 border-neutral-200 border p-4 rounded-2xl flex items-center shrink-0">
          <img
            src={image}
            alt={title}
            className="font-extrabold w-full h-full object-contain"
          />
        </div>

        <div className="w-full">
          <h3 className="font-bold">{title}</h3>
          <span className="text-sm text-neutral-500">{category}</span>
          <span className="block font-bold">₹{price.toFixed(0)}</span>
          <div className="flex justify-between items-end">
            <div className="flex gap-3 mt-3">
              <button
                type="button"
                onClick={() => handleDecrement(id)}
                className="w-7 h-7 border-primary border bg-white flex justify-center items-center cursor-pointer rounded-sm"
              >
                <Minus className="w-4 h-4" />
              </button>
              {quantity}
              <button
                type="button"
                onClick={() => handleIncrement(id)}
                className="w-7 h-7 border-primary border bg-white flex justify-center items-center cursor-pointer rounded-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={() => removeFromCart(id)}
                className=" text-[12px]  text-red-500  flex justify-center items-center rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <Trash className="text-red-500 w-3 h-3 mr-1" /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
