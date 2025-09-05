import { useCallback, useState } from "react";
import { ListFilterPlus } from "lucide-react";
import ListSelector from "../components/UI/Selections/ListSelector";
import FiltersDrawer from "../components/UI/FiltersDrawer";

const Collection = () => {
  const [sortBy, setSortBy] = useState("Relevant");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <div className="w-full">
      <div className="w-full min-h-[calc(100dvh-6.6rem)] mt-[6.6rem] flex justify-start px-[5%]">
        <div className="w-full flex flex-col">
          {/* Topbar */}
          <div className="w-full flex justify-between items-end px-[2%] pt-[2.5rem] pb-[1rem]">
            <h4 className="text-[2.4rem] leading-[3rem] text-darker font-medium">
              ALL COLLECTIONS
            </h4>

            <div className="flex items-center gap-[1rem]">
              {/* Filter Item Button */}
              <button
                onClick={openDrawer}
                className="flex items-center gap-[0.5rem] py-[0.3rem] px-[1rem] bg-darker focus:outline-none rounded-lg cursor-pointer"
              >
                <ListFilterPlus color="#ffffff" size={20} />
                <span className="text-[1.6rem] leading-[2.5rem] text-light font-medium">
                  Filter Items
                </span>
              </button>

              {/* Sort Items Selector */}
              <ListSelector
                value={sortBy}
                setValue={setSortBy}
                width="16rem"
                options={["Relavent", "Price Low to High", "Price High to Low"]}
              />
            </div>
          </div>

          {/* Product Items Card Cont */}
          <div className="w-full flex bg-amber-200"></div>
        </div>
      </div>

      <FiltersDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default Collection;
