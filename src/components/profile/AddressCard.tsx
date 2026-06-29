import { MapPin, Pencil, Phone, Trash } from "lucide-react";
import useAddress from "../../hooks/useAddress";
import type { Address } from "../../types/address";

type Props = {
  address: Address;
  onEdit: () => void;
};

const AddressCard = ({ address, onEdit }: Props) => {
  const { deleteAddress } = useAddress();

  return (
    <div className="space-y-2 rounded-2xl border border-gray-300 bg-white p-3.5 shadow-xl">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-gray-900">{address.fullName}</h3>
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={onEdit}
            className="rounded-md p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-primary"
            aria-label="Edit address"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => deleteAddress(address.id)}
            className="rounded-md p-1.5 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
            aria-label="Delete address"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="flex items-center gap-1.5 text-sm text-gray-600">
        <Phone className="h-3.5 w-3.5 shrink-0" />
        {address.phone}
      </p>

      <div className="space-y-0.5 text-sm text-gray-600">
        <p>{address.address1}</p>
        {address.address2 && <p>{address.address2}</p>}
        <p>
          {address.city}, {address.state} — {address.pincode}
        </p>
        {address.landmark && (
          <p className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {address.landmark}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
