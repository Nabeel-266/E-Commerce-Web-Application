import { useState } from "react";
import EmptyOrders from "../../assets/Empty-Orders.png";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Orders History");

  const changeTabsHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex flex-col gap-[1rem] mt-[1rem]">
      {/* Tabs */}
      <div className="flex items-center gap-[1rem] py-[1rem] border-b-[0.1rem] border-secondary-03">
        {["Orders History", "Pending Orders"].map((tabName) => (
          <button
            onClick={() => changeTabsHandler(tabName)}
            className={`text-[1.6rem] px-[1rem] py-[0.4rem] border-[0.1rem] rounded-lg cursor-pointer transition-all duration-200 ${
              activeTab === tabName
                ? "bg-darker text-light border-darker"
                : "bg-light text-darker border-secondary-03"
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="w-full">
        {/* Empty-Orders Cont */}
        <div className="w-full bg-[#f8f8f8] min-h-[50dvh] p-[1rem] pb-[4rem] flex flex-col items-center justify-center rounded-xl">
          <img
            src={EmptyOrders}
            alt="Empty-Orders-Illustration"
            className="w-[30rem]"
          />
          {activeTab.includes("History") ? (
            <p className="text-[2.2rem] text-darker font-righteous font-medium">
              You don’t have any past orders.
            </p>
          ) : (
            <p className="text-[2.2rem] text-darker font-righteous font-medium">
              You don’t have any pending orders
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
