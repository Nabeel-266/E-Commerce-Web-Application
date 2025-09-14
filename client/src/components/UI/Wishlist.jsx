import { Trash2 } from "lucide-react";
import EmptyWishlist from "../../assets/Empty-Wishlist.png";
import ProductImage from "../../assets/p_img2.png";
import TransBtnBlack from "./Buttons/TransBtnBlack";

const Wishlist = () => {
  return (
    <div className="w-full mt-[1.5rem]">
      {false ? (
        // Empty-Wishlist Cont
        <div className="w-full bg-[#f8f8f8] min-h-[50dvh] p-[2rem] pb-[4rem] flex flex-col items-center justify-center rounded-xl">
          <img
            src={EmptyWishlist}
            alt="Empty-Wishlist-Illustration"
            className="w-[40rem]"
          />

          <p className="text-[2.2rem] text-darker font-righteous font-medium">
            You don’t have any wishlist items yet.
          </p>
        </div>
      ) : (
        // Wishlist Items Cont
        <div className="w-full grid grid-cols-2 gap-x-[2rem] gap-y-[3rem]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full min-h-[10rem] flex items-start gap-[1rem]"
            >
              {/* Product Image */}
              <div className="min-w-[9rem] h-[10rem]">
                <img
                  src={ProductImage}
                  alt="Product_Picture"
                  className="h-full object-cover shadow shadow-black/10 ring-1 ring-black/5"
                />
              </div>

              {/* Product Detail */}
              <div className="flex-1 overflow-hidden h-full py-[0.2rem]">
                {/* Title */}
                <h5 className="text-[1.6rem] leading-[2rem] font-medium text-darker mb-[0.5rem] whitespace-nowrap text-ellipsis overflow-hidden">
                  <abbr
                    title="Boy Round Neck Pure Cotton T-Shirt"
                    className="decoration-none no-underline"
                  >
                    Boy Round Neck Pure Cotton T-Shirt
                  </abbr>
                </h5>

                {/* Price */}
                <div className="flex items-end gap-[1rem] mb-[1.4rem]">
                  <p className="text-[1.7rem] leading-[1.8rem] text-darker font-semibold mb-[0.5rem]">
                    Rs. 1,499
                  </p>

                  <p className="text-[1.4rem] leading-[1.6rem] text-secondary-01 font-medium mb-[0.5rem] line-through">
                    Rs. 2,499
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <TransBtnBlack
                    text="View&nbsp; Details"
                    px={0.8}
                    py={0.7}
                    rounded={0.4}
                    fontSize={1.4}
                    fontWeight={500}
                  />

                  <button className="text-darker cursor-pointer">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
