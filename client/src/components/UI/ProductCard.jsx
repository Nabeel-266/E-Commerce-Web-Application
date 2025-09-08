import ProductDemoImg from "../../assets/p_img2.png";

const ProductCard = () => {
  return (
    <>
      {/* Image */}
      <div className="w-full h-[25rem] overflow-hidden">
        <img
          src={ProductDemoImg}
          alt={`Product-Image`}
          className="w-full h-full object-cover rounded-md relative z-[1] transition-all duration-100 hover:scale-[1.1]"
        />
      </div>

      {/* Title */}
      <h3 className="mt-[1rem] text-[1.6rem] leading-[2rem] font-medium text-dark mb-[0.5rem] whitespace-nowrap text-ellipsis overflow-hidden ">
        <abbr
          title="Boy Round Neck Pure Cotton T-Shirt"
          className="decoration-none no-underline"
        >
          Boy Round Neck Pure Cotton T-Shirt
        </abbr>
      </h3>

      {/* Price */}
      <div className="flex flex-col items-start gap-[rem]">
        <p className="text-[1.7rem] leading-[2rem] text-darker font-semibold mb-[0.5rem]">
          Rs. 1,499
        </p>

        <p className="text-[1.5rem] leading-[1.6rem] text-secondary-01 font-medium mb-[0.5rem] line-through">
          Rs. 2,499
        </p>
      </div>
    </>
  );
};

export default ProductCard;
