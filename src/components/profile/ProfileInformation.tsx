import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const ProfileInformation = () => {
  const { user, login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!user) return;
    const updatedUser = {
      ...user,
      ...formData,
    };

    login(updatedUser);
  };

  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold">
        Add or Edit your Personal Information
      </h2>
      <div className="w-full space-y-4">
        <div className="flex gap-5">
          <div className="w-full">
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15"
            />
          </div>

          <div className="w-full">
            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-full">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15"
            />
          </div>

          <div className="w-full">
            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-primary text-white px-5 py-3 rounded-md cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileInformation;
