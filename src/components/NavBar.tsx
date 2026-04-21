import { LOGO_TEXT, NAV_LINKS } from "../utils/constants";
const NavBar = () => {
  return (
    <header>
      <nav className="bg-white ">
         <div className="container-rest">
            <div className="py-4">
                 <div className="logo">
                    <h1>{LOGO_TEXT}</h1>
                 </div>
                 <div className="links">
                    <ul>
                      {NAV_LINKS.map(link => (
                        <li key={link}><a href="#">{link}</a></li>
                      ))}
                    </ul>
                 </div>

                 
            </div>
         </div>
      </nav>
    </header>
  )
}

export default NavBar;