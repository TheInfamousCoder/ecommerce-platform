import { MapPinHouse } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15";

const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    phoneError: "",
    address1Error: "",
    address2Error: "",
    cityError: "",
    stateError: "",
    pincodeError: "",
    landMarkError: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [`${name}Error`]: "",
    }));
  };

  //form-validation
  const validateForm = () => {
    const newErrors = {
      nameError: "",
      phoneError: "",
      address1Error: "",
      address2Error: "",
      cityError: "",
      stateError: "",
      pincodeError: "",
      landMarkError: "",
    };

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (formData.fullName.trim().length < 2) {
      newErrors.nameError = "First name is too short";
    }

    if (phoneDigits.length < 12) {
      newErrors.phoneError = "Phone number is invalid";
    }

    if (formData.address1.trim().length < 2) {
      newErrors.address1Error = "Address is too short";
    }

    if (formData.address2.trim().length < 2) {
      newErrors.address2Error = "Address is too short";
    }

    if (formData.city.trim().length < 2) {
      newErrors.cityError = "City name is too short";
    }
    if (formData.state.trim().length < 2) {
      newErrors.stateError = "State name is too short";
    }
    if (formData.pincode.trim().length < 2) {
      newErrors.pincodeError = "Pincode is invalid";
    }
    if (formData.landmark.trim().length < 2) {
      newErrors.landMarkError = "Landmark is too short";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  //form-submission-logic
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      console.log(formData);
      setFormData({
        fullName: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <MapPinHouse className="text-primary" />

        <div>
          <h2 className="text-2xl font-bold">Shipping Address</h2>
          <p className="text-sm text-gray-500">
            Manage your delivery information.
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.fullName}
          placeholder="Full Name"
          className={inputClass}
          onChange={handleChange}
        />
        {errors.nameError}
        <PhoneInput
          defaultCountry="in"
          name="phone"
          value={formData.phone}
          onChange={(phone) =>
            setFormData((prev) => ({
              ...prev,
              phone,
            }))
          }
          placeholder="Enter phone number"
          inputClassName="
            !w-full
            !rounded-r-lg
            !border-gray-200
            !h-[50px]
            focus-within:!border-primary
          "
          countrySelectorStyleProps={{
            buttonClassName: `
              !rounded-l-lg
              !h-[50px]
              hover:!bg-neutral-100
            `,
            dropdownStyleProps: {
              className: "bg-white shadow-xl rounded-md border border-gray-200",
            },
          }}
        />
        {errors.phoneError}

        <input
          type="text"
          placeholder="Address Line 1"
          className={inputClass}
          onChange={handleChange}
          name="address1"
          value={formData.address1}
        />
        {errors.address1Error}

        <input
          type="text"
          placeholder="Address Line 2"
          className={inputClass}
          onChange={handleChange}
          name="address2"
          value={formData.address2}
        />
        {errors.address2Error}

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="City"
            className={inputClass}
            onChange={handleChange}
            name="city"
            value={formData.city}
          />
          {errors.cityError}

          <input
            type="text"
            placeholder="State"
            className={inputClass}
            onChange={handleChange}
            name="state"
            value={formData.state}
          />
          {errors.stateError}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Pincode"
            className={inputClass}
            onChange={handleChange}
            name="pincode"
            value={formData.pincode}
          />
          {errors.pincodeError}
          <input
            type="text"
            placeholder="Landmark"
            className={inputClass}
            onChange={handleChange}
            name="landMark"
            value={formData.landmark}
          />
          {errors.landMarkError}
        </div>

        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
