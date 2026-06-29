import { Plus } from "lucide-react";
import { useState } from "react";
import useAddress from "../../hooks/useAddress";
import type { Address } from "../../types/address";
import AddressCard from "./AddressCard";
import AddressFormModal from "./AddressFormModal";

const ShippingAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const { addresses } = useAddress();

  const openAddModal = () => {
    setEditingAddress(null);
    setIsModalOpen(true);
  };

  const openEditModal = (address: Address) => {
    setEditingAddress(address);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAddress(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={() => openEditModal(address)}
          />
        ))}
      </div>
      <div className="mx-auto mt-4 w-fit">
        <button
          type="button"
          className="add-cart-btn duraton-300 flex items-center justify-center gap-1.5 transition-[background-color,color] hover:bg-white hover:text-primary"
          onClick={openAddModal}
        >
          <Plus /> Add address
        </button>
      </div>

      {isModalOpen && (
        <AddressFormModal
          closeModal={closeModal}
          addressToEdit={editingAddress}
        />
      )}
    </div>
  );
};

export default ShippingAddress;
