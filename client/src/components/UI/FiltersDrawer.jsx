import { memo, useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import {
  categories,
  types,
  fabrics,
  styles,
  priceRanges,
  discountRanges,
} from "../../library/filterOptionsData";

const FiltersDrawer = ({ isOpen, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    wearTypes: [],
    minPrice: null,
    maxPrice: null,
    fabrics: [],
    styles: [],
    minDiscount: null,
    maxDiscount: null,
  });

  // Selected Filters Data Handler
  const selectFiltersHandler = (key, val) => {
    if (key === "category") {
      if (selectedFilters.category === val) {
        setSelectedFilters((prev) => ({ ...prev, [key]: "" }));
      } else {
        setSelectedFilters((prev) => ({ ...prev, [key]: val }));
      }
    } else if (key === "wearTypes" || key === "fabrics" || key === "styles") {
      if (val.checked) {
        setSelectedFilters((prev) => ({
          ...prev,
          [key]: [...prev[key], val.value],
        }));
      } else {
        setSelectedFilters((prev) => ({
          ...prev,
          [key]: prev[key].filter((item) => item !== val.value),
        }));
      }
    } else if (key === "price" || key === "discount") {
      if (
        selectedFilters[val[0][0]] === val[0][1] &&
        selectedFilters[val[1][0]] === val[1][1]
      ) {
        setSelectedFilters((prev) => ({
          ...prev,
          [val[0][0]]: null,
          [val[1][0]]: null,
        }));
      } else {
        setSelectedFilters((prev) => ({
          ...prev,
          [val[0][0]]: val[0][1],
          [val[1][0]]: val[1][1],
        }));
      }
    }
  };

  // Drawer Close when click outside drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (component unmount hote waqt restore ho)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`w-full h-dvh fixed z-[599] top-0 left-0 bg-dark/20 overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[40rem] h-full bg-light overflow-hidden transition-all duration-500 ease-in-out${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100%]"
        }`}
      >
        {/* Header */}
        <header className="w-full h-[6rem] px-[2rem] flex items-center justify-between shadow-black/3 shadow-md">
          <h2 className="text-[2.4rem] leading-[2.4rem] text-darker font-righteous font-medium underline underline-offset-4">
            Filters
          </h2>

          <button
            onClick={onClose}
            className="text-[2.4rem] text-darker font-semibold font-righteous rounded-lg cursor-pointer active:scale-[0.99] transition-all"
          >
            <X />
          </button>
        </header>

        {/* Body */}
        <div className="h-[calc(100dvh-7rem)] px-[1.5rem] pt-[1.5rem] pb-[2rem] scroll-auto overflow-y-scroll custom-scroll">
          <div className="w-full flex flex-col gap-[3rem] px-[0.5rem]">
            {/* Category */}
            <div className="w-full flex flex-col gap-[1.2rem]">
              {/* Title */}
              <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
                <h4 className="text-[1.9rem] leading-[2.6rem] text-darker font-semibold">
                  Category
                </h4>

                <hr className="w-[80%] h-[0.2rem] bg-primary-01 border-0 rounded-full" />
              </div>

              {/* Options */}
              <div className="flex flex-wrap items-start gap-x-[1rem] gap-y-[2.5rem]">
                {categories.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectFiltersHandler("category", option)}
                    className={`text-[1.6rem] leading-[2.4rem] font-medium px-[1.5rem] py-[0.3rem] rounded-full cursor-pointer border-[0.1rem] border-secondary-01 hover:shadow-sm shadow-black/20 transition-all duration-200 ${
                      selectedFilters.category === option
                        ? "bg-dark text-light"
                        : "text-darker"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Wear Type */}
            <div className="w-full flex flex-col gap-[1.2rem]">
              {/* Title */}
              <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
                <h4 className="text-[1.9rem] leading-[2.6rem] text-darker font-semibold">
                  Wear Type
                </h4>

                <hr className="w-[80%] h-[0.2rem] bg-primary-01 border-0 rounded-full" />
              </div>

              {/* Options */}
              <div className="flex flex-wrap items-start gap-x-[1rem] gap-y-[1rem]">
                {types.map((option, index) => (
                  <div key={index} className="flex">
                    <input
                      type="checkbox"
                      name={option}
                      id={option}
                      value={option}
                      className="hidden peer"
                      onChange={(e) =>
                        selectFiltersHandler("wearTypes", e.target)
                      }
                    />
                    <label
                      htmlFor={option}
                      className={`text-[1.6rem] leading-[2.4rem] text-darker font-medium px-[1.5rem] py-[0.3rem] rounded-full cursor-pointer border-[0.1rem] border-secondary-01 hover:shadow-sm shadow-black/20 transition-all duration-200 peer-checked:bg-dark peer-checked:text-light`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="w-full flex flex-col gap-[1.2rem]">
              {/* Title */}
              <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
                <h4 className="text-[1.9rem] leading-[2.6rem] text-darker font-semibold">
                  Price
                </h4>

                <hr className="w-[80%] h-[0.2rem] bg-primary-01 border-0 rounded-full" />
              </div>

              {/* Options */}
              <div className="flex flex-col gap-[1rem]">
                {priceRanges.map(({ text, minVal, maxVal }, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      selectFiltersHandler("price", [
                        ["minPrice", minVal],
                        ["maxPrice", maxVal],
                      ])
                    }
                    className={`flex items-center justify-between text-[1.6rem] leading-[2.4rem] text-darker font-medium px-[1.2rem] py-[0.5rem] rounded-lg cursor-pointer bg-secondary-0 border-[0.1rem] border-secondary-03 ${
                      selectedFilters.minPrice === minVal &&
                      selectedFilters.maxPrice === maxVal
                        ? "bg-secondary-04"
                        : "bg-light"
                    }`}
                  >
                    <span>{text}</span>
                    {selectedFilters.minPrice === minVal &&
                      selectedFilters.maxPrice === maxVal && <Check />}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric */}
            <div className="w-full flex flex-col gap-[1.2rem]">
              {/* Title */}
              <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
                <h4 className="text-[1.9rem] leading-[2.6rem] text-darker font-semibold">
                  Fabric
                </h4>

                <hr className="w-[80%] h-[0.2rem] bg-primary-01 border-0 rounded-full" />
              </div>

              {/* Options */}
              <div className="flex flex-wrap items-start gap-x-[1rem] gap-y-[1rem]">
                {fabrics.map((option, index) => (
                  <div key={index} className="flex">
                    <input
                      type="checkbox"
                      name={option}
                      id={option}
                      value={option}
                      className="hidden peer"
                      onChange={(e) =>
                        selectFiltersHandler("fabrics", e.target)
                      }
                    />
                    <label
                      htmlFor={option}
                      className={`text-[1.6rem] leading-[2.4rem] text-darker font-medium px-[1.5rem] py-[0.3rem] rounded-full cursor-pointer border-[0.1rem] border-secondary-01 hover:shadow-sm shadow-black/20 transition-all duration-200 peer-checked:bg-dark peer-checked:text-light`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="w-full flex flex-col gap-[1.2rem]">
              {/* Title */}
              <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
                <h4 className="text-[1.9rem] leading-[2.6rem] text-darker font-semibold">
                  Style
                </h4>

                <hr className="w-[80%] h-[0.2rem] bg-primary-01 border-0 rounded-full" />
              </div>

              {/* Options */}
              <div className="flex flex-wrap items-start gap-x-[1rem] gap-y-[1rem]">
                {styles.map((option, index) => (
                  <div key={index} className="flex">
                    <input
                      type="checkbox"
                      name={option}
                      id={option}
                      value={option}
                      className="hidden peer"
                      onChange={(e) => selectFiltersHandler("styles", e.target)}
                    />
                    <label
                      htmlFor={option}
                      className={`text-[1.6rem] leading-[2.4rem] text-darker font-medium px-[1.5rem] py-[0.3rem] rounded-full cursor-pointer border-[0.1rem] border-secondary-01 hover:shadow-sm shadow-black/20 transition-all duration-200 peer-checked:bg-dark peer-checked:text-light`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Discounts */}
            <div className="w-full flex flex-col gap-[1.2rem]">
              {/* Title */}
              <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
                <h4 className="text-[1.9rem] leading-[2.6rem] text-darker font-semibold">
                  Discounts
                </h4>

                <hr className="w-[80%] h-[0.2rem] bg-primary-01 border-0 rounded-full" />
              </div>

              {/* Options */}
              <div className="flex flex-col gap-[1rem]">
                {discountRanges.map(({ text, minVal, maxVal }, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      selectFiltersHandler("discount", [
                        ["minDiscount", minVal],
                        ["maxDiscount", maxVal],
                      ])
                    }
                    className={`flex items-center justify-between text-[1.6rem] leading-[2.4rem] text-darker font-medium px-[1.2rem] py-[0.5rem] rounded-lg cursor-pointer bg-secondary-0 border-[0.1rem] border-secondary-03 ${
                      selectedFilters.minDiscount === minVal &&
                      selectedFilters.maxDiscount === maxVal
                        ? "bg-secondary-04"
                        : "bg-light"
                    }`}
                  >
                    <span>{text}</span>
                    {selectedFilters.minDiscount === minVal &&
                      selectedFilters.maxDiscount === maxVal && <Check />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FiltersDrawer);

// Category
// Men, Women, Kids (jo tumne sahi socha hai)

// Wear Type
// Topwear, Bottomwear, Winterwear

// Price Range
// Range Slider ya predefined ranges (e.g. Under Rs. 1500, Rs. 1500–3000, Rs. 3000–5000, Above Rs. 5000)

// Fabric
// Cotton, Denim, Wool, Polyester, Linen

// Style
// Casual, Formal, Partywear, Sportswear, Ethnic

// Discounts
// 10% Off, 20–40% Off, 50% Off & Above
