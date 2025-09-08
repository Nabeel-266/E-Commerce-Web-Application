import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { CircleUser, ShoppingBag, Heart, LogOut } from "lucide-react";

const UserDashboard = () => {
  const location = useLocation();
  const [isActiveTab, setIsActiveTab] = useState(
    location.pathname.split("/")[2]
  );

  useEffect(() => {
    setIsActiveTab(location.pathname.split("/")[2]);
  }, [location]);

  return (
    <div className="w-full">
      <div className="w-full relative min-h-[calc(100dvh-6.6rem)] mt-[6.6rem] mb-[5rem] flex gap-[3rem] px-[6%]">
        {/* Sidebar */}
        <aside className="w-[20%] min-w-[25rem] h-fit flex flex-col bg-[#f8f8f8] mt-[2rem] p-[1.2rem] rounded-2xl">
          <ul className="w-full flex flex-col gap-[0.3rem]">
            {[
              { Icon: CircleUser, name: "My Account", route: "/user/account" },
              { Icon: ShoppingBag, name: "Orders", route: "/user/orders" },
              { Icon: Heart, name: "WishList", route: "/user/wishlist" },
            ].map(({ Icon, name, route }, index) => (
              <li
                key={index}
                className={`relative z-[1] overflow-hidden ${
                  isActiveTab === route.split("/")[2] &&
                  "bg-light rounded-lg before:content-[''] before:h-full before:w-[0.3rem] before:bg-primary-01 before:absolute before:z-[5] before:top-0 before:left-0"
                }`}
              >
                <Link
                  to={route}
                  className={`${
                    isActiveTab === route.split("/")[2]
                      ? "text-darker font-semibold"
                      : "text-dark font-medium"
                  } w-full relative flex items-center gap-[0.8rem] px-[1.2rem] py-[0.8rem]`}
                >
                  <Icon size={21} />
                  <span className="text-[1.7rem] leading-[1.8rem]">{name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <hr className="text-secondary-03 mt-[1.5rem] mb-[2rem]" />

          <button className="w-full flex items-center gap-[0.8rem] px-[1.2rem] py-[0.8rem] text-dark bg-light hover:bg-primary-01 hover:text-light border-[0.2rem] border-secondary-03 transition-all duration-200 rounded-full cursor-pointer">
            <LogOut size={21} />
            <span className="text-[1.7rem] leading-[1.8rem] font-medium whitespace-nowrap">
              Logout
            </span>
          </button>
        </aside>

        <main className="flex-1 mt-[2rem]">
          <div className="w-full">
            {/* Header */}
            <header className="w-fit py-[1rem]">
              <h3 className="text-[2.6rem] leading-[3rem] text-darker font-medium font-righteous">
                {isActiveTab === "account"
                  ? "Account Details"
                  : isActiveTab === "orders"
                  ? "Orders"
                  : isActiveTab === "wishlist" && "Wishlist"}
              </h3>
              <hr className="w-[80%] h-[0.3rem] bg-primary-01 border-0 rounded-full" />
            </header>

            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
