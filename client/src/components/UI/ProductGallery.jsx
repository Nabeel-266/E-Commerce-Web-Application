import { useState } from "react";

const ProductImages = [
  "/src/assets/Products/Set-01/p_set_img-01.png",
  "/src/assets/Products/Set-01/p_set_img-02.png",
  "/src/assets/Products/Set-01/p_set_img-03.png",
  "/src/assets/Products/Set-01/p_set_img-04.png",
];

const ProductGallery = () => {
  const [mainImageSrc, setMainImageSrc] = useState(
    "/src/assets/Products/Set-01/p_set_img-01.png"
  );

  const selectMainImageHandler = (imgSrc) => {
    setMainImageSrc(imgSrc);
  };

  return (
    <section className="w-[49%] flex gap-[1rem]">
      {/* Thumbnails */}
      <div className="w-[18%] flex flex-col gap-[1rem]">
        {ProductImages.map((image, index) => (
          <div
            className={`relative h-1/4 aspect-square rounded-md cursor-pointer overflow-hidden before:absolute before:content-[''] before:z-[5] before:top-0 before:left-0 before:w-full before:h-full before:pointer-events-none hover:before:bg-black/15 before:transition-all ${
              image === mainImageSrc
                ? "before:bg-black/30"
                : "before:bg-transparent"
            }`}
          >
            <img
              onClick={() => selectMainImageHandler(image)}
              src={image}
              alt={`Product_Thumbnail-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-auto">
        <img
          src={mainImageSrc}
          alt="Product_Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default ProductGallery;
