const AviationIndustry = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div>
        {/* Header */}
        <div className="mb-24 text-center md:mb-[220px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#9BA5C0] md:text-sm">
            WE CRAFT BEAUTIFUL WEBSITES FOR THE
          </p>

          <div className="relative">
            <h2 className="mb-0 text-6xl font-bold leading-tight text-[#ECEEF6] sm:text-7xl md:text-8xl lg:text-9xl">
              AVIATION
            </h2>
            <h3 className="relative -mt-4 text-3xl font-bold text-[#9BA5C0] sm:text-4xl md:-mt-6 md:text-5xl lg:-mt-8 lg:text-6xl">
              INDUSTRY
            </h3>
          </div>
        </div>

        {/* Portfolio Showcase */}
        <div className="relative bg-[#D6E1F7] pb-16 md:flex md:h-[500px] md:items-end md:justify-center">
          <div className="relative mx-auto w-full max-w-5xl md:absolute md:-top-[200px]">

            {/* ===== MOBILE ONLY ===== */}
            <div className="flex flex-col items-center md:hidden">
              <div className="w-72 rounded-lg shadow-2xl">
                <img
                  src="/private-jet.png"
                  alt="Private Jet Booking Website"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Mobile CTA (directly under image) */}
              <button className="group mt-8 flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-gray-700 transition-all hover:border-2 hover:border-blue-600 hover:text-blue-600">
                REQUEST A CALL
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-700 transition-all group-hover:translate-x-1 group-hover:border-blue-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* ===== DESKTOP ONLY (UNCHANGED) ===== */}
            <div className="relative mx-auto hidden h-[400px] md:block md:h-[500px]">
              {/* Left Card */}
              <div className="absolute left-0 top-1/2 z-10 w-64 -translate-y-1/2 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-6 md:w-80">
                <img
                  src="/auto-service.png"
                  alt="Auto Service Website"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Center Card */}
              <div className="absolute left-1/2 top-1/2 z-30 w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 md:w-[450px] lg:w-[500px]">
                <img
                  src="/private-jet.png"
                  alt="Private Jet Booking Website"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Right Card */}
              <div className="absolute right-0 top-1/2 z-10 w-64 -translate-y-1/2 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-6 md:w-80">
                <img
                  src="/real-estate.png"
                  alt="Real Estate Website"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Desktop CTA (UNCHANGED POSITION) */}
          <div className="hidden md:flex justify-center">
            <button className="group flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-gray-700 transition-all hover:border-2 hover:border-blue-600 hover:text-blue-600">
              REQUEST A CALL
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-700 transition-all group-hover:translate-x-1 group-hover:border-blue-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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