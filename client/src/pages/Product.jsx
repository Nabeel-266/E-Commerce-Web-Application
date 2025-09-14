import { useState } from "react";
import ProductGallery from "../components/UI/ProductGallery";
import TransBtnBlack from "../components/UI/Buttons/TransBtnBlack";
import TransBtnColored from "../components/UI/Buttons/TransBtnColored";
import ProductCard from "../components/UI/ProductCard";

const sizes = ["S", "M", "L", "XL", "XXL"];

const Product = () => {
  const [size, setSize] = useState(null);

  return (
    <div className="w-full min-h-dvh pt-[6.6rem] px-[6%]">
      <div className="w-full px-[2%]">
        <div className="w-full flex items-start gap-[2rem] py-[3.5rem] mb-[3rem]">
          {/* Product Gallery */}
          <ProductGallery />

          {/* Product Info */}
          <section className="w-[51%] pl-[2rem] py-[0rem]">
            {/* Title */}
            <h3 className="text-[2.4rem] font-semibold text-darker">
              Men Round Neck Pure Cotton T-shirt
            </h3>

            {/* Price & Discount */}
            <div className="flex items-start gap-[3rem] mt-[1.5rem]">
              {/* Price */}
              <div className="flex flex-col items-start gap-[0.2rem]">
                <p className="text-[2.3rem] leading-[2.3rem] text-darker font-bold mb-[0.5rem]">
                  PKR 1,499
                </p>

                <p className="text-[1.6rem] leading-[1.6rem] text-secondary-01 font-medium line-through">
                  PKR 2,499
                </p>
              </div>

              <div className="px-[1rem] py-[0.1rem] bg-primary-01 rounded-md">
                <span className="text-[1.6rem] leading-[2rem] text-light font-semibold">
                  -50% OFF
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="w-[90%] text-[1.6rem] text-dark font-medium mt-[2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet illum necessitatibus deserunt, eligendi alias voluptate
              laboriosam ad consequatur hic.
            </p>

            {/* Reviews */}
            <div className="mt-[2rem] space-y-[0.3rem]">
              <h6 className="text-[1.8rem] text-darker font-medium">
                Reviews ( 17 )
              </h6>

              <div className="flex items-center gap-[0.5rem]">
                {[
                  "star-full",
                  "star-full",
                  "star-full",
                  "star-full",
                  "star-half",
                ].map((star, index) => (
                  <img
                    key={index}
                    src={`/src/assets/${star}.png`}
                    alt={star}
                    className="size-[1.5rem]"
                  />
                ))}
              </div>
            </div>

            {/* Select Size */}
            <div className="mt-[2rem] space-y-[0.8rem]">
              <h6 className="text-[1.8rem] text-darker font-medium">
                Select Size
              </h6>

              <div className="flex flex-wrap items-start gap-x-[1rem] gap-y-[2.5rem]">
                {sizes.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSize(option)}
                    className={`text-[1.6rem] leading-[2.4rem] font-medium px-[1.5rem] py-[0.5rem] rounded-md cursor-pointer border-[0.1rem] border-secondary-02 hover:shadow-sm shadow-black/20 transition-all duration-200 ${
                      size === option ? "bg-darker text-light" : "text-darker"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-[2.5rem] flex items-center gap-[1.5rem]">
              <TransBtnBlack
                text="ADD&nbsp; TO &nbsp;CART"
                px={3}
                py={1.2}
                rounded={0.2}
                fontSize={1.6}
                fontWeight={500}
              />

              <TransBtnColored
                text="BUY NOW"
                px={3}
                py={1.2}
                rounded={0.2}
                fontSize={1.6}
                fontWeight={500}
              />
            </div>

            <hr className="mt-[2.5rem] text-secondary-03" />

            {/* Note */}
            <div className="mt-[1.5rem] space-y-[0.2rem]">
              <p className="text-[1.4rem] text-dark font-medium">
                Guaranteed Genuine Quality.
              </p>

              <p className="text-[1.4rem] text-dark font-medium">
                Safe & Secure Payments Methods.
              </p>

              <p className="text-[1.4rem] text-dark font-medium">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </section>
        </div>

        {/* Related Products */}
        <div className="w-full flex flex-col gap-[3rem] py-[2rem] mb-[6rem]">
          {/* Title */}
          <div className="w-fit space-y-[0.2rem] px-[0.2rem]">
            <h4 className="text-[2.6rem] leading-[3rem] text-darker font-medium font-righteous">
              Related Products
            </h4>

            <hr className="w-[80%] h-[0.3rem] bg-primary-01 border-0 rounded-full" />
          </div>

          {/* Product Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem]">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
