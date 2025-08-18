import { Link, NavLink, useLocation } from "react-router";

// Import React Icons
import SearchIcon from "../../assets/Icons/search_icon.png";
import ProfileIcon from "../../assets/Icons/profile_icon.png";
import CartIcon from "../../assets/Icons/cart_icon.png";

const Navbar = () => {
  const location = useLocation();
  const routeLocation = location.pathname;

  return (
    <div className="w-full flex items-center justify-center fixed top-0 left-0 z-[999] bg-transparent backdrop-blur-lg border-b-[0rem] border-[333]">
      <div className="w-[96%] px-[4rem] h-[6rem] flex items-center justify-between">
        {/* Navbar Left */}
        <div className="w-[70%] h-full flex items-center gap-[4.5rem]">
          {/* LOGO */}
          <NavLink to="/">
            <div className="flex items-end gap-[0.3rem]">
              <h3 className="text-dark text-[3.3rem] leading-[3.3rem] font-k2d font-bold">
                Trend
                <span className="text-primary-01">ify</span>.
              </h3>
            </div>
          </NavLink>

          {/* Navigations */}
          <nav className="navigations mt-[0.6rem]">
            <ul className="flex items-center gap-[1.2rem] mt-[0.35rem]">
              {[
                ["Collection", "/collection"],
                ["Men", "/collection?men=true"],
                ["Women", "/collection"],
                ["Kids", "/collection"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([tilte, path], index) => (
                <li
                  key={index}
                  className={`nav-item font-k2d font-medium hover:text-primary-01 transition-all duration-300 ${
                    routeLocation !== path ? "text-dark" : "text-primary-01"
                  } `}
                >
                  <NavLink
                    to={path}
                    className="nav-link text-[1.8rem] leading-[1.8rem] text-center px-[0.6rem] whitespace-nowrap"
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

            <Link to="/">
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
              <span className="absolute z-10 -bottom-[0.6rem] -right-[0.7rem] text-center text-light text-[1.1rem] leading-[1.1rem] font-bold bg-dark px-[0.5rem] pt-[0.3rem] pb-[0.4rem] rounded-full">
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
