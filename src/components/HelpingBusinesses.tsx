import Button from "./Button";

const HelpingBusinesses = () => {
  return (
    <section className="bg-white py-16 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#151618] md:text-4xl lg:text-5xl">
            Helping businesses reach the top.
            <br />
            <span className="text-[#151618]">Your brand will be next.</span>
          </h2>

          <p className="mb-12 text-sm leading-relaxed text-[#151618] md:text-base">
            To gain your customers&apos; confidence in your business and to win
            their trust, you must have first class
            <br className="hidden md:block" />
            expertise in a website or app interface design. Because no matter how
            good your brand is, a poorly designed
            <br className="hidden md:block" />
            website or app could mean potential customers going to your
            competitors.
          </p>
        </div>

        {/* Responsive Website Showcase */}
        <div className="bg-[#E3EAFC] py-32">
            <div className="relative mx-auto max-w-[900px]">
              {/* Desktop Image */}
              <div 
                className="w-[90%] h-[400px] "
            >
                <img
                    src="/iconic-desktop.png"
                    alt="Iconic Desktop"
                    className="object-fit w-full h-full rounded-xl shadow-lg"
                />
              </div>              
              {/* Mobile Image */}
              <img
                src="/iconic-mobile.png"
                alt="Iconic Mobile"
                className="
                  absolute
                  bottom-[-60px]
                  right-[-40px]
                  w-[180px]
                  h-[400px]
                  md:w-[220px]
                  
                  rounded-xl
                  shadow-2xl
                "
              />
            </div>
        </div>

        {/* Responsive Websites Section */}
        <div className="mx-auto max-w-3xl -mt-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#151618]">
            WE BUILD USER-FRIENDLY
          </p>

          <h3 className="mb-6 text-3xl font-bold text-[#151618] md:text-4xl lg:text-5xl">
            Responsive Websites
          </h3>

          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            Experience seamless browsing on any device with our responsive design service. From desktops to smartphones, your hotel's website will adapt effortlessly to provide an optimal user experience, ensuring your guests can explore and book with ease, no matter where they are.
          </p>

          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default HelpingBusinesses;