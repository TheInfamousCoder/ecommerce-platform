import * as Slider from "@radix-ui/react-slider";
import { useMemo, useState } from "react";
import type { Product } from "../../types/products";
type Props = {
  products: Product[];
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
};
const PriceFilter = ({ products, priceRange, setPriceRange }: Props) => {
  const maximumProductPrice = useMemo(() => {
    if (products.length === 0) return;

    return Math.ceil(
      Math.max(...products.map((product: Product) => product.price)),
    );
  }, [products]);

  const maxPrice = maximumProductPrice ?? 1000;

  const [prevMaxPrice, setPrevMaxPrice] = useState(maxPrice);

  if (maxPrice !== prevMaxPrice) {
    setPrevMaxPrice(maxPrice);
    setPriceRange([0, maxPrice]);
  }

  return (
    <div>
      <div className="bg-white p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-3">Filter by Price</h3>

        <div className="flex gap-1 items-center">
          <p>{priceRange[0]}</p>
          <Slider.Root
            className="relative flex items-center w-full h-5"
            min={0}
            max={maxPrice}
            step={10}
            value={priceRange}
            onValueChange={(value) => {
              setPriceRange(value as [number, number]);
            }}
          >
            <Slider.Track className="bg-neutral-200 relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-primary rounded-full h-full" />
            </Slider.Track>

            <Slider.Thumb className="block w-5 h-5 bg-primary rounded-full cursor-pointer" />
            <Slider.Thumb className="block w-5 h-5 bg-primary rounded-full cursor-pointer" />
          </Slider.Root>
          <p>{priceRange[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
