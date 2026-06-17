import { FileUser, Layers, MapPinHouse, Star } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { useState } from "react";
import ProfileWrap from "../components/profile/ProfileWrap";
import ShippingAddress from "../components/profile/ShippingAddress";

const Tabs = [
  {
    id: "personal-information",
    tabIcon: <FileUser />,
    tabName: "Personal Information",
    tabContent: <ProfileWrap />,
  },
  {
    id: "shipping-address",
    tabIcon: <MapPinHouse />,
    tabName: "Shipping Address",
    tabContent: <ShippingAddress />,
  },
  {
    id: "wishlist",
    tabIcon: <Star />,
    tabName: "Wishlist",
    tabContent: "This is wishlist tab",
  },
  {
    id: "orders",
    tabIcon: <Layers />,
    tabName: "Orders",
    tabContent: "This is orders tab",
  },
];

const Profile = () => {
  const [tabItem, setTabItem] = useState("personal-information");
  const activeTab = Tabs.find((tab) => tab.id === tabItem);

  const isActive = (id: string) => {
    return id === tabItem;
  };

  return (
    <div>
      <PageBanner>
        <h1 className="text-6xl font-bold text-white">Profile</h1>
      </PageBanner>

      {/* =====profile-content===== */}
      <div className="container-rest py-16">
        {/* ----tabs--- */}
        <div className="flex justify-between gap-5  w-3xl mx-auto mb-12 bg-primary p-3 rounded-full">
          {Tabs.map((tab) => (
            <button
              key={tab.id}
              className={`cursor-pointer p-2 flex gap-2 rounded-full  ${isActive(tab.id) ? "border-b-2 border-primary bg-purple-200 text-primary" : "text-white"}`}
              onClick={() => setTabItem(tab.id)}
            >
              {tab.tabIcon}
              {tab.tabName}
            </button>
          ))}
        </div>
        {/* -----tab-content----- */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md">
          {activeTab?.tabContent}
        </div>
      </div>
    </div>
  );
};

export default Profile;
