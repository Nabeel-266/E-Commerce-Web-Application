import BannerImage from "../assets/About_Banner.jpg";
import ContentImage from "../assets/About_Content.jpg";

// Import Icons
import { Shirt, Wallet, CircleCheckBig } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-dvh pt-[6.6rem]">
      {/* Hero Section */}
      <div
        className="w-full h-[35rem] relative z-[1] bg-cover bg-no-repeat bg-bottom before:content-[''] before:absolute before:w-full before:h-full before:z-[3] before:bg-gradient-to-t before:from-light before:to-transparent"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        <div className="w-full h-full backdrop-blur-[1rem] flex flex-col items-center justify-center gap-[1.5rem] relative z-[5]">
          <h1 className="text-[4rem] leading-[4rem] text-darker tracking-wide font-righteous font-medium">
            About Us
          </h1>

          <p className="text-[2rem] leading-[2rem] text-darker font-righteous font-medium">
            Trendify – Redefining fashion with comfort, quality, and style.
          </p>
        </div>
      </div>

      {/* Wrapper Cont */}
      <div className="h-full mx-[6%] flex flex-col gap-[3rem] pt-[5rem]">
        {/* Intro Story Section */}
        <section className="w-full flex items-start justify-start gap-[2%]">
          {/* Image Side */}
          <div className="w-[50%] h-[46rem] px-[4%]">
            <div className="h-full relative z-[1] rounded-[1rem] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[5] before:bg-gradient-to-b before:from-transparent before:to-zinc-950/50 select-none">
              <img
                src={ContentImage}
                alt="Laptop_Image"
                className="w-full h-full object-cover shadow-lg shadow-secondary-02"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-[50%] flex flex-col items-start justify-start gap-[2rem] mt-[2rem]">
            <h2 className="text-[3rem] leading-[3rem] font-righteous font-medium text-darker tracking-wide">
              Who We Are
            </h2>

            <p className="text-[1.6rem] leading-[2.2rem] text-dark font-normal max-w-[50rem]">
              Trendify was founded in 2021 with a clear purpose: to make fashion
              for <span className="font-semibold">men, women, and kids</span>{" "}
              more accessible, stylish, and enjoyable. What started as a small
              idea soon turned into a mission — to bring trendy, high-quality
              clothing to every wardrobe without the hassle of endless store
              visits.
            </p>

            <p className="text-[1.6rem] leading-[2.2rem] text-dark font-normal max-w-[50rem]">
              We launched our eCommerce platform because we believed shopping
              for clothes should feel inspiring, not exhausting. Instead of
              chasing the latest trends from shop to shop, we wanted to create a
              space where families can explore everything — from everyday
              essentials to statement pieces — all in one place.
            </p>

            <p className="text-[1.6rem] leading-[2.2rem] text-dark font-normal max-w-[50rem]">
              At Trendify, fashion isn’t just about clothing; it’s about
              confidence, comfort, and expressing who you are. That’s why we
              carefully curate collections that balance{" "}
              <span className="font-semibold">
                style, quality, and affordability
              </span>
              , ensuring every man, woman, and child finds something they truly
              love.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="flex items-center justify-center gap-[8%] px-[4%] py-[2rem]">
          {/* Mission */}
          <div className="py-[1rem] space-y-[1rem]">
            <h3 className="text-[2.6rem] font-righteous font-medium text-darker">
              Our Mission
            </h3>
            <p className="text-[1.6rem] leading-[2.2rem] font-medium text-dark">
              At Trendify, our mission is to bring men’s, women’s, and kids’
              fashion closer to every household by offering trendy, high-quality
              clothing at prices people can truly afford. We strive to make
              style accessible across Pakistan and beyond, ensuring that every
              customer feels confident, comfortable, and connected to the latest
              trends without compromising on quality.
            </p>
          </div>

          {/* Vision */}
          <div className="py-[1rem] space-y-[1rem]">
            <h3 className="text-[2.6rem] font-righteous font-medium text-darker">
              Our Vision
            </h3>
            <p className="text-[1.6rem] leading-[2.2rem] font-medium text-dark">
              Our vision is to establish Trendify as a leading fashion eCommerce
              brand that transforms the way families experience clothing. We aim
              to inspire individuality and self-expression through thoughtfully
              curated collections for men, women, and kids. By combining style,
              affordability, and innovation, we aspire to become the go-to
              destination where fashion empowers confidence and tells every
              customer’s story.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full flex flex-col items-start justify-start gap-[4rem] px-[4%] mt-[4rem]">
          <h2 className="text-[3rem] leading-[3rem] font-righteous font-medium text-darker tracking-wide">
            Why Choose Us
          </h2>

          <div className="w-full max-h-full grid grid-cols-3 gap-[2rem]">
            {[
              {
                Icon: Shirt,
                title: "Latest Trends",
                text: "Stay ahead with clothing shaped by global fashion. Explore styles that turn runway energy into wearable looks you can enjoy each season, with full confidence.",
              },
              {
                Icon: Wallet,
                title: "Affordable Prices",
                text: "Enjoy stylish fashion without overspending. We balance affordability, making clothing accessible for everyone while ensuring you never compromise on your style.",
              },
              {
                Icon: CircleCheckBig,
                title: "Quality Products",
                text: "Each piece is crafted with premium fabrics and precise finishing. We focus on comfort, and fit, delivering quality that endures seasons and supports confidence.",
              },
            ].map(({ Icon, title, text }, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center gap-[1rem] text-center px-[2rem] pt-[1.8rem] pb-[2rem] bg-secondary-04 rounded-xl"
              >
                <div className="bg-darker p-[1rem] rounded-3xl">
                  <Icon color="#ff6a38" size={30} strokeWidth={2} />
                </div>

                <h4 className="text-[2rem] leading-[2.2rem] font-medium text-darker font-righteous mt-[0.5rem]">
                  {title}
                </h4>

                <p className="text-[1.5rem] leading-[2rem] text-dark font-normal text-center tracking-wide">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quotation Line */}
        <section className="flex flex-col items-center justify-center px-[2%] pt-[5rem] pb-[7rem] text-[1.7rem] leading-[2.5rem] text-dark font-medium italic font-righteous text-center">
          <p className="border-t-[0.2rem] border-dark">
            At Trendify, it’s not just about fashion — it’s about expressing who
            you are.
          </p>

          <p>Let’s define trends together.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
