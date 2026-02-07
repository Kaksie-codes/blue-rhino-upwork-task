
const AviationIndustry = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="">
        {/* Header */}
        <div className="mb-[220px] text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#9BA5C0] md:text-sm">
            WE CRAFT BEAUTIFUL WEBSITES FOR THE
          </p>
          
          {/* Large Background Text */}
          <div className="relative">
            <h2 className="mb-0 text-6xl font-bold leading-tight text-[#ECEEF6] sm:text-7xl md:text-8xl lg:text-9xl">
              AVIATION
            </h2>
            <h3 className="relative -mt-4 text-3xl font-bold text-[#9BA5C0] sm:text-4xl md:-mt-6 md:text-5xl lg:-mt-8 lg:text-6xl">
              INDUSTRY
            </h3>
          </div>
        </div>

        {/* Portfolio Showcase - 3D Stack Effect */}
        <div className="bg-[#D6E1F7] h-[500px] flex items-end justify-center  pb-16 relative">
            <div className="absolute -top-[200px] left-auto right-auto mx-auto w-full ">
                <div className="relative  mx-auto mb-16 h-[400px] max-w-5xl md:h-[500px]">
                  {/* Left Card - Auto Service */}
                  <div className="absolute left-0 top-1/2 z-10 w-64 -translate-y-1/2 rotate-0 transform rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-6 md:w-80">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/auto-service.png"
                        alt="Auto Service Website"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  {/* Center Card - Main Focus (Private Jet) */}
                  <div className="absolute left-1/2 top-1/2 z-30 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 md:w-[450px] lg:w-[500px]">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/private-jet.png"
                        alt="Private Jet Booking Website"
                        className="h-auto w-full jet-image"
                
                      />
                    </div>
                  </div>
                  {/* Right Card - Real Estate */}
                  <div className="absolute right-0 top-1/2 z-10 w-64 -translate-y-1/2 rotate-0 transform rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-6 md:w-80">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/real-estate.png"
                        alt="Real Estate Website"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
            </div>
            {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-3 rounded-full hover:border-2  px-6 py-3 font-semibold text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600">
            REQUEST A CALL
            <span className="flex h-16 w-16  items-center justify-center rounded-full border-2 border-gray-700 transition-all group-hover:border-blue-600 group-hover:translate-x-1">
              <svg 
                className="h-5 w-5" 
                fill="none" 
                strokeWidth="2" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
        </div>        
      </div>
    </section>
  );
};

export default AviationIndustry;