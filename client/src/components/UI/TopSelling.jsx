import ProductCard from "./ProductCard";

const TopSelling = () => {
  return (
    <div className="w-full flex flex-col gap-[4rem] pt-[4rem] pb-[7rem]">
      {/* Section Heading */}
      <section className="w-full flex flex-col items-center justify-center gap-[0.2rem] border-t-[0.1rem] border-secondary-04">
        <h2 className="text-[3.5rem] font-medium font-righteous tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
          Top Selling
        </h2>

        <p className="text-[1.8rem] leading-[1.8rem] font-normal text-dark tracking-wide">
          Discover our most popular products loved by customers.
        </p>
      </section>

      {/* Section Items */}
      <section className="w-full px-[2%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem] ">
          {/* Collection Items */}
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopSelling;
