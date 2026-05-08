import { useCart } from "../../hooks/useCart";
import CartSummaryItem from "./CartSummaryItem";

const CartSummary = () => {
  const { cart } = useCart();

  const sgst = 2.5;
  const cgst = 2.5;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const sgstAmount = (cartTotal * sgst) / 100;
  const cgstAmount = (cartTotal * cgst) / 100;

  const totalPrice = cartTotal + sgstAmount + cgstAmount;

  const cartSummaryItems = [
    {
      label: "Total Items",
      value: totalItems,
    },
    {
      label: "Sub Total",
      value: cartTotal,
    },
    {
      label: "Delivery Charges",
      value: 0,
    },
    {
      label: `SGST (${sgst}%)`,
      value: sgstAmount,
    },
    {
      label: `CGST (${cgst}%)`,
      value: cgstAmount,
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold">Order Summary</h2>

      {cartSummaryItems.map((item) => (
        <CartSummaryItem key={item.label} item={item} />
      ))}

      <div className="flex justify-between pt-4 text-neutral-500 ">
        <span className="font-bold">Total Price</span>
        <span className="font-bold">₹{totalPrice.toFixed(0)}</span>
      </div>

      <div className="w-full mt-4">
        <button
          type="button"
          className="add-cart-btn w-full text-xl uppercase hover:bg-purple-800 transition-colors duration-300"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartSummary;
