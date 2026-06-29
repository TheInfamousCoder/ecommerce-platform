import { createContext } from "react";
import type { Address } from "../types/address";

type AddressContextType = {
  addresses: Address[];
  addAddress: (addess: Address) => void;
  editAddress: (id: string, address: Address) => void;
  deleteAddress: (id: string) => void;
};

export const AddressContext = createContext<AddressContextType | null>(null);
