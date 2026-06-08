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
      <div className="max-w-xl space-y-4">
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
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
