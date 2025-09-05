import { Link, NavLink, useLocation } from "react-router";

// Import React Icons
import SearchIcon from "../../assets/Icons/search.png";
import ProfileIcon from "../../assets/Icons/profile.png";
import CartIcon from "../../assets/Icons/cart.png";

const Navbar = () => {
  const location = useLocation();
  const routeLocation = location.pathname;

  return (
    <div className="w-full flex items-center justify-center fixed top-0 left-0 z-[499] backdrop-blur-3xl border-b-[0rem] border-[333] px-[4%] bg-white/80">
      <div className="w-full px-[2%] h-[6.6rem] flex items-center justify-between border-b-[0.1rem] border-secondary-04">
        {/* Navbar Left */}
        <div className="w-[70%] h-full flex items-center gap-[4.5rem]">
          {/* LOGO */}
          <NavLink to="/">
            <h3 className="text-darker text-[3.4rem] leading-[3.4rem] font-righteous font-medium">
              Trend
              <span className="text-primary-01">ify</span>.
            </h3>
          </NavLink>

          {/* Navigations */}
          <nav className="navigations mt-[0.5rem]">
            <ul className="flex items-center gap-[0.8rem] mt-[0.35rem]">
              {[
                ["COLLECTION", "/collection"],
                ["ABOUT", "/about"],
                ["CONTACT", "/contact"],
              ].map(([tilte, path], index) => (
                <li
                  key={index}
                  className={`nav-item font-medium font-righteous tracking-wider hover:text-primary-01 transition-all duration-300 ${
                    routeLocation !== path ? "text-darker" : "text-primary-01"
                  } `}
                >
                  <NavLink
                    to={path}
                    className="nav-link text-[1.6rem] leading-[1.6rem] text-center px-[0.6rem] whitespace-nowrap"
                  >
                    {tilte}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Navbar Right */}
        <div className="w-[30%] h-full flex items-center justify-end">
          <div className="authBtns flex items-center gap-[2rem] mt-1">
            <Link to="/">
              <img
                src={SearchIcon}
                alt="search-icon"
                className="w-[2.2rem] select-none"
              />
            </Link>

            <Link to="/login">
              <img
                src={ProfileIcon}
                alt="profile-icon"
                className="w-[2rem] select-none"
              />
            </Link>

            <Link to="/" className="relative">
              <img
                src={CartIcon}
                alt="cart-icon"
                className="w-[2.1rem] select-none"
              />
              <span className="absolute z-10 -bottom-[0.6rem] -right-[0.7rem] text-center text-light text-[1.1rem] leading-[1.1rem] font-bold bg-darker px-[0.5rem] pt-[0.3rem] pb-[0.4rem] rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
