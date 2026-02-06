
// const HelpingBusinesses = () => {
//   return (
//     <div className="relative container mx-auto ">
//       Helping
//     </div>
//   )
// }

// export default HelpingBusinesses

import Button from './Button';

const HelpingBusinesses = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Helping businesses reach the top.
            <br />
            <span className="text-gray-600">Your brand will be next.</span>
          </h2>
          
          <p className="mb-12 text-sm leading-relaxed text-gray-600 md:text-base">
            To gain your customers' confidence in your business and to win their trust, you must have first class
            <br className="hidden md:block" />
            expertise in a website or app interface design. Because no matter how good your brand is, a poorly designed
            <br className="hidden md:block" />
            website or app could mean potential customers going to your competitors.
          </p>
        </div>

        {/* Responsive Website Showcase */}
        <div className="relative mx-auto mb-16 max-w-5xl">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50" />
          
          {/* Device Mockups Container */}
          <div className="relative px-8 py-12 md:px-16 md:py-20">
            {/* Desktop mockup - centered */}
            <div className="relative z-10 mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-orange-400 via-red-500 to-red-600 p-4">
                  {/* Placeholder for desktop mockup */}
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 text-6xl font-bold">BE ICONIC</div>
                      <div className="text-sm">Desktop View</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet mockup - left */}
            <div className="absolute left-4 top-1/2 z-20 w-32 -translate-y-1/2 md:left-8 md:w-40 lg:w-48">
              <div className="overflow-hidden rounded-lg bg-gray-900 shadow-xl">
                <div className="aspect-[3/4] bg-gradient-to-br from-orange-400 via-red-500 to-red-600 p-2">
                  {/* Placeholder for tablet mockup */}
                  <div className="flex h-full items-center justify-center text-xs text-white">
                    Tablet
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile mockup - right */}
            <div className="absolute right-4 top-1/2 z-20 w-24 -translate-y-1/2 md:right-8 md:w-28 lg:w-32">
              <div className="overflow-hidden rounded-lg bg-gray-900 shadow-xl">
                <div className="aspect-[9/16] bg-gradient-to-br from-orange-400 via-red-500 to-red-600 p-2">
                  {/* Placeholder for mobile mockup */}
                  <div className="flex h-full items-center justify-center text-xs text-white">
                    Mobile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Websites Section */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            WE BUILD USER-FRIENDLY
          </p>
          
          <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Responsive Websites
          </h3>
          
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            Experience responsiveness in all your devices with no response delay issues. Every pixel elements is
            <br className="hidden md:block" />
            optimized so you have no difficulty about what PC/MAC, IOS mobile or Android you use. So you can access
            <br className="hidden md:block" />
            your website or app from anywhere without delay and without losing any time.
          </p>

          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default HelpingBusinesses;
