import { Link } from "react-router-dom";
import { LOGO_TEXT, NAV_LINKS } from "../utils/constants";
import CartButton from "./ui/CartButton";
import MenuButton from "./ui/MenuButton";
import SearchButton from "./ui/SearchButton";
import useAuth from "../hooks/useAuth";
type Props = {
  openSearch: () => void;
};
const NavBar = ({ openSearch }: Props) => {
  const { user } = useAuth();

  console.log(user);

  return (
    <header>
      <nav className="bg-white ">
        <div className="container-rest">
          <div className="py-4 flex-item-row-distance">
            <div className="logo">
              <h1>{LOGO_TEXT}</h1>
            </div>
            <div className="links">
              <ul className="flex-item-row-distance gap-8 nav-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-item-row-distance gap-8">
              <SearchButton openSearch={openSearch} />
              <CartButton />
              <MenuButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
