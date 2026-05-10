const ProductGallery = ({ product }) => {
  return (
    <div className="p-12 rounded-2xl border-neutral-300 border bg-white relative">
      <img src={product.image} alt={product.title} className="mx-auto" />

      <div className="px-2 py-1 rounded-2xl bg-purple-500 w-fit absolute top-6 right-6">
        <span className="text-white text-sm">{product.category}</span>
      </div>
    </div>
  );
};

export default ProductGallery;
