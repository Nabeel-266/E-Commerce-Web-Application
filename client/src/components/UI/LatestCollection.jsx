import ProductCard from "./ProductCard";

const LatestCollection = () => {
  return (
    <div className="flex flex-col gap-[4rem] pt-[5rem] pb-[7rem]">
      {/* Section Heading */}
      <section className="flex flex-col items-center justify-center gap-[0.2rem]">
        <h2 className="text-[3.5rem] font-medium font-righteous tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-darker to-primary-01">
          Latest Collections
        </h2>

        <p className="text-[1.8rem] leading-[1.8rem] font-normal text-dark tracking-wide">
          Explore the latest trends and styles in our new collection.
        </p>
      </section>

      {/* Section Items */}
      <section className="px-[2%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem] ">
          {/* Collection Item Example */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="bg-light rounded-lg">
              <ProductCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LatestCollection;
