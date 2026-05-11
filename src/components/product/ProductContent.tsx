import { Box, Minus, Plus, StarIcon } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import type { Product } from "../../types/products";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductContent = ({ product }: Props) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { addToCart } = useCart();

  const increment = () => {
    setProductQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    setProductQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, productQuantity);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">{product.title}</h1>

      <div className="mb-2">
        <p className="text-neutral-500">{product.description}</p>
      </div>

      <div className="flex justify-items-start gap-0.5 mb-6">
        <StarIcon className="w-5 h-5 fill-yellow-600 text-yellow-600" />
        <span className="font-semibold text-neutral-500">
          {`${product.rating.rate} (${product.rating.count} reviews)`}
        </span>
      </div>

      <div className="flex justify-items-start gap-1 text-green-600 mb-4">
        <Box className="w-5 h-5" />
        <span>In Stock</span>
      </div>

      <div>
        <span className="text-3xl font-bold">₹{product.price.toFixed(0)}</span>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <div className="bg-white p-2 flex items-center gap-5 border border-purple-500">
          <button type="button" onClick={decrement} className="cursor-pointer">
            <Minus />
          </button>
          {productQuantity}
          <button type="button" onClick={increment} className="cursor-pointer">
            <Plus />
          </button>
        </div>

        <div>
          <Link
            to="/cart"
            type="button"
            onClick={handleAddToCart}
            className="cursor-pointer py-2 px-4 bg-primary text-white border transition:colors duration-300 border-purple-500 hover:bg-white hover:text-primary"
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
