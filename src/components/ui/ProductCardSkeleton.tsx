const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse">
      {/* Image */}
      <div className="w-full h-48 bg-neutral-400 rounded-xl mb-4" />

      {/* Category */}
      <div className="h-4 bg-neutral-400 rounded w-1/3 mb-3" />

      {/* Title */}
      <div className="h-5 bg-neutral-400 rounded w-full mb-2" />
      <div className="h-5 bg-neutral-400 rounded w-3/4 mb-4" />

      {/* Price */}
      <div className="h-6 bg-neutral-400 rounded w-1/4 mb-4" />

      {/* Button */}
      <div className="h-10 bg-neutral-400 rounded-lg w-full" />
    </div>
  );
};

export default ProductCardSkeleton;
