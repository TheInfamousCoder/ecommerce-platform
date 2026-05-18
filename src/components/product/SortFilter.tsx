import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";

export type SortOption =
  | "featured"
  | "price-low-high"
  | "price-high-low"
  | "name-ascending"
  | "name-descending";

const SortSelect = ({ value, onValueChange }) => {
  return (
    <Select.Root
      defaultValue="featured"
      value={value}
      onValueChange={(value) => onValueChange(value as SortOption)}
    >
      <Select.Trigger className="inline-flex items-center justify-between gap-2 px-4 py-2 border border-neutral-300 rounded-lg min-w-[200px] bg-white w-full">
        <Select.Value placeholder="Sort by" />
        <Select.Icon>
          <ChevronDown className="w-4 h-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-white border rounded-lg shadow-lg overflow-hidden z-50">
          <Select.Viewport className="p-1">
            <Select.Item
              value="featured"
              className="relative flex items-center px-8 py-2 rounded cursor-pointer hover:bg-neutral-100"
            >
              <Select.ItemText>Featured</Select.ItemText>
              <Select.ItemIndicator className="absolute left-2">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="price-low-high"
              className="relative flex items-center px-8 py-2 rounded cursor-pointer hover:bg-neutral-100"
            >
              <Select.ItemText>Price: Low to High</Select.ItemText>
              <Select.ItemIndicator className="absolute left-2">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="price-high-low"
              className="relative flex items-center px-8 py-2 rounded cursor-pointer hover:bg-neutral-100"
            >
              <Select.ItemText>Price: High to Low</Select.ItemText>
              <Select.ItemIndicator className="absolute left-2">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="name-ascending"
              className="relative flex items-center px-8 py-2 rounded cursor-pointer hover:bg-neutral-100"
            >
              <Select.ItemText>Name: Ascending</Select.ItemText>
              <Select.ItemIndicator className="absolute left-2">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="name-descending"
              className="relative flex items-center px-8 py-2 rounded cursor-pointer hover:bg-neutral-100"
            >
              <Select.ItemText>Name: Descending</Select.ItemText>
              <Select.ItemIndicator className="absolute left-2">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SortSelect;
