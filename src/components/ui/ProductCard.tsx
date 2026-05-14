import { Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "../../types/products";
import { useCart } from "../../hooks/useCart";
import ProductCartActions from "./ProductCartActions";
import ProductHoverActions from "./ProductHoverActions";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [fullTitle, setFullTitle] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      <div
        className="product-card-default relative transition-transform duration-200  hover:-translate-y-2 group"
        onMouseEnter={() => setFullTitle(true)}
        onMouseLeave={() => setFullTitle(false)}
      >
        <div className="product-card-header">
          <img src={product.image} alt={product.title} />
          <span className="product-badge">{product.category}</span>
        </div>
        <div className="product-card-footer">
          <h3>
            {fullTitle
              ? product.title
              : product.title.length > 25
                ? `${product.title.slice(0, 25)}...`
                : product.title}
          </h3>
          <div className="flex-item-row-default gap-1 mb-3">
            <span className="flex items-center gap-0.5">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              {product.rating.rate}
            </span>
            <span className="w-0.5 h-0.5 bg-black rounded-full"></span>
            <span>{product.rating.count} Reviews</span>
          </div>
          <span className="product-price">₹ {product.price.toFixed(0)}</span>
          <ProductCartActions
            onAddToCart={() => addToCart(product)}
            productId={product.id}
          />
        </div>
        <ProductHoverActions />
      </div>
    </>
  );
};

export default ProductCard;
