const CartSummaryItem = ({ item }) => {
  return (
    <div className="flex justify-between py-4 text-neutral-500 border-b border-neutral-200">
      <span>{item.label}</span>
      <span className="font-bold">
        {typeof item.value === "number" ? item.value.toFixed(0) : item.value}
      </span>
    </div>
  );
};

export default CartSummaryItem;
