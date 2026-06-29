import { useEffect, useState } from "react";
import type { Address } from "../types/address";
import { AddressContext } from "./AddressContext";

type Props = {
  children: React.ReactNode;
};

const STORAGE_KEY = "addresses";

const AddressProvider = ({ children }: Props) => {
  const [addresses, setAddresses] = useState<Address[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const addAddress = (address: Address) => {
    setAddresses((prev) => [...prev, address]);
  };

  const editAddress = (id: string, editedAddress: Address) => {
    setAddresses((prev) =>
      prev.map((address: Address) =>
        address.id === id ? editedAddress : address,
      ),
    );
  };

  const deleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses));
  }, [addresses]);

  return (
    <AddressContext.Provider
      value={{ addresses, addAddress, editAddress, deleteAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
