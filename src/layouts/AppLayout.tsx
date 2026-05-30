import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchModal from "../components/search/SearchModal";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();

  const handleModalState = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    if (isSearchOpen) {
      handleModalState();
    }
  }, [location.pathname]);

  return (
    <>
      <NavBar openSearch={() => setIsSearchOpen(true)} />
      {isSearchOpen && (
        <SearchModal disposeModal={() => setIsSearchOpen(false)} />
      )}

      <Outlet />
    </>
  );
};

export default AppLayout;
