import { MapPinHouse } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import useAddress from "../../hooks/useAddress";
import type { Address } from "../../types/address";

type Props = {
  closeModal: () => void;
  addressToEdit?: Address | null;
};

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15";

const emptyForm = {
  fullName: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  pincode: "",
  landmark: "",
};

const AddressFormModal = ({ closeModal, addressToEdit }: Props) => {
  const { addAddress, editAddress } = useAddress();
  const isEditing = Boolean(addressToEdit);

  const [formData, setFormData] = useState({
    fullName: addressToEdit?.fullName ?? "",
    phone: addressToEdit?.phone ?? "",
    address1: addressToEdit?.address1 ?? "",
    address2: addressToEdit?.address2 ?? "",
    city: addressToEdit?.city ?? "",
    state: addressToEdit?.state ?? "",
    pincode: addressToEdit?.pincode ?? "",
    landmark: addressToEdit?.landmark ?? "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
      landmark: "",
    };

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name is too short";
    }

    if (phoneDigits.length < 12) {
      newErrors.phone = "Phone number is invalid";
    }

    if (formData.address1.trim().length < 2) {
      newErrors.address1 = "Address is too short";
    }

    if (formData.address2.trim().length < 2) {
      newErrors.address2 = "Address is too short";
    }

    if (formData.city.trim().length < 2) {
      newErrors.city = "City name is too short";
    }

    if (formData.state.trim().length < 2) {
      newErrors.state = "State name is too short";
    }

    if (formData.pincode.trim().length < 6) {
      newErrors.pincode = "Pincode is invalid";
    }

    if (formData.landmark.trim().length < 2) {
      newErrors.landmark = "Landmark is too short";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    if (isEditing && addressToEdit) {
      editAddress(addressToEdit.id, { ...addressToEdit, ...formData });
    } else {
      addAddress({ id: crypto.randomUUID(), ...formData });
    }

    try {
      setIsSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      closeModal();

      console.log(formData);

      setFormData(emptyForm);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div
        className="
          relative
          w-full
          max-w-3xl
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >
        <button
          type="button"
          onClick={closeModal}
          className="
            absolute
            right-4
            top-4
            cursor-pointer
            text-gray-500
            hover:text-black
          "
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <MapPinHouse className="text-primary" />

          <div>
            <h2 className="text-2xl font-bold">
              {isEditing ? "Edit Address" : "Shipping Address"}
            </h2>

            <p className="text-sm text-gray-500">
              {isEditing
                ? "Update your delivery information."
                : "Manage your delivery information."}
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              className={inputClass}
              onChange={handleChange}
            />

            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <PhoneInput
              defaultCountry="in"
              value={formData.phone}
              onChange={(phone) => {
                setFormData((prev) => ({
                  ...prev,
                  phone,
                }));

                setErrors((prev) => ({
                  ...prev,
                  phone: "",
                }));
              }}
              placeholder="Enter phone number"
              inputClassName="
                !w-full
                !rounded-r-lg
                !border-gray-200
                !h-[50px]
              "
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <input
            type="text"
            name="address1"
            value={formData.address1}
            placeholder="Address Line 1"
            className={inputClass}
            onChange={handleChange}
          />

          {errors.address1 && (
            <p className="text-sm text-red-500">{errors.address1}</p>
          )}

          <input
            type="text"
            name="address2"
            value={formData.address2}
            placeholder="Address Line 2"
            className={inputClass}
            onChange={handleChange}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="City"
              className={inputClass}
              onChange={handleChange}
            />

            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              placeholder="Pincode"
              className={inputClass}
              onChange={handleChange}
            />

            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              placeholder="Landmark"
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              rounded-lg
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:opacity-95
              cursor-pointer
              disabled:opacity-50
            "
          >
            {isSubmitting
              ? "Saving..."
              : isEditing
                ? "Update Address"
                : "Save Address"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressFormModal;
