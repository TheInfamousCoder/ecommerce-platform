import {
  ChevronDown,
  LogIn,
  LogOut,
  Package,
  User2Icon,
  UserCircle2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);
  const initials = `${user?.firstName[0] ?? ""}${user?.lastName[0] ?? ""}`;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`group flex h-10 cursor-pointer items-center gap-1 rounded-full border p-1 transition-all duration-300 ${
          isOpen
            ? "border-primary/30 bg-primary/5 shadow-sm"
            : "border-transparent hover:border-gray-200 hover:bg-gray-50"
        }`}
      >
        {user ? (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
            {initials.toUpperCase()}
          </span>
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
            <User2Icon className="h-5 w-5" strokeWidth={1.5} />
          </span>
        )}
        <ChevronDown
          className={`mr-1 h-4 w-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : "group-hover:text-gray-600"
          }`}
          strokeWidth={2}
        />
      </button>

      {isOpen && (
        <div className="menu-dropdown-panel absolute right-0 top-[calc(100%+0.5rem)] z-50 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
          {user ? (
            <div className="border-b border-gray-100 bg-gradient-to-br from-primary/5 to-white px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                  {initials.toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="truncate text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="border-b border-gray-100 px-4 py-4">
              <p className="text-sm font-semibold text-gray-900">Account</p>
              <p className="mt-0.5 text-xs text-gray-500">
                Sign in to manage your orders
              </p>
            </div>
          )}

          <div className="p-2">
            <Link to="/profile" className="menu-dropdown-item cursor-pointer">
              <UserCircle2
                className="menu-dropdown-icon h-4 w-4 shrink-0 text-gray-400 transition-colors duration-200"
                strokeWidth={1.75}
              />
              My Profile
            </Link>

            <button type="button" className="menu-dropdown-item cursor-pointer">
              <Package
                className="menu-dropdown-icon h-4 w-4 shrink-0 text-gray-400 transition-colors duration-200"
                strokeWidth={1.75}
              />
              Orders
            </button>
          </div>

          <div className="mx-2 border-t border-gray-100" />

          <div className="p-2">
            {user ? (
              <button
                type="button"
                className="menu-dropdown-item cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-600"
                onClick={logout}
              >
                <LogOut
                  className="h-4 w-4 shrink-0 text-red-400 transition-colors duration-200"
                  strokeWidth={1.75}
                />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="menu-dropdown-item text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <LogIn
                  className="h-4 w-4 shrink-0 text-red-400 transition-colors duration-200"
                  strokeWidth={1.75}
                />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
