import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center w-full">
        Your cart is empty. Please add some products.
      </h2>
      <Link
        to={"/products"}
        type="button"
        className="add-cart-btn mx-auto w-fit block mt-4 hover:bg-white hover:text-primary transition-[background-color,color] duraton-300"
      >
        Browse Products
      </Link>
    </div>
  );
};

export default CartEmpty;
