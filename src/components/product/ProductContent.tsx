import { Box, StarIcon } from "lucide-react";
import ProductCartActions from "../ui/ProductCartActions";

const ProductContent = ({ product, productId, onAddToCart }) => {
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

      <ProductCartActions
        onAddToCart={() => onAddToCart(product)}
        productId={productId}
      />
    </div>
  );
};

export default ProductContent;
