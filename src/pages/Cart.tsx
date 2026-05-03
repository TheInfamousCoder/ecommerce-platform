import { Minus, Plus, RotateCw, Trash } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { useCart } from "../hooks/useCart";
import CartEmpty from "../components/ui/CartEmpty";

const Cart = () => {
  const { cart, removeFromCart, handleDecrement, handleIncrement, clearCart } =
    useCart();

  return (
    <div>
      <PageBanner>
        <h1 className="text-6xl font-bold text-white">Cart</h1>
      </PageBanner>

      <div className="container-rest py-16">
        <div>
          {cart.length > 0 ? (
            <>
              <div className="py-2 border-neutral-300 border-b mb-3 max-w-2xl">
                <button
                  type="button"
                  onClick={() => clearCart()}
                  className="flex gap-1 items-center cursor-pointer text-primary hover:text-purple-700 text-sm w-fit mx-auto"
                >
                  <RotateCw className="w-3.5 h-3.5" /> Clear Cart
                </button>
              </div>

              {/* redering cart items */}
              {cart.map(({ id, title, image, category, price, quantity }) => (
                <div className="max-w-2xl" key={id}>
                  <div className="flex gap-3 items-start mb-4 px-3 py-4 bg-white rounded-2xl ">
                    <div className="w-32 h-32 border-neutral-200 border p-4 rounded-2xl flex items-center shrink-0">
                      <img
                        src={image}
                        alt={title}
                        className="font-extrabold w-full"
                      />
                    </div>

                    <div className="w-full">
                      <h3 className="font-bold">{title}</h3>
                      <span className="text-sm text-neutral-500">
                        {category}
                      </span>
                      <span className="block font-bold">
                        ₹{price.toFixed(0)}
                      </span>
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
                            <Trash className="text-red-500 w-3 h-3 mr-1" />{" "}
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
