import { RotateCw } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { useCart } from "../hooks/useCart";
import CartEmpty from "../components/ui/CartEmpty";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div>
      <PageBanner>
        <h1 className="text-6xl font-bold text-white">Cart</h1>
      </PageBanner>

      <div className="container-rest py-16">
        <div className="flex justify-between">
          {/* =====cart-items===== */}
          <div className="flex-1">
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
                <CartList />
              </>
            ) : (
              <CartEmpty />
            )}
          </div>
          {/* ======cart-summary===== */}
          {cart.length === 0 ? (
            ""
          ) : (
            <div className="bg-white flex-1 rounded-2xl max-w-md p-8 h-fit sticky top-0 mt-12">
              <CartSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
