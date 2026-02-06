const OurServices = () => {
  const benefits = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Custom Design"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "SEO Friendly"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Scalable Solutions"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Friendly"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Effective Call-to-Actions"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Satisfaction Guaranteed"
    }
  ];

  const services = [
    {
      title: "Web Design & Development",
      description: "Ensure your website looks stunning and performs flawlessly across all devices. From ideation to manifestation, we'll both.",
      color: "blue"
    },
    {
      title: "Brand Design",
      description: "Empower your team to easily update and manage your website's content with our user-friendly content management system (CMS).",
      color: "purple"
    },
    {
      title: "Digital Marketing",
      description: "Empower your team to easily update and manage your website's content with our user-friendly content management system (CMS).",
      color: "green"
    },
    {
      title: "Email Marketing",
      description: "Seamlessly integrate booking plugins and reservation system to streamline the booking process for your guests.",
      color: "orange"
    },
    {
      title: "Packaging Design",
      description: "Enhance your online store with secure and more payments traffic with our comprehensive SEO strategies tailored for the hospitality industry.",
      color: "pink"
    },
    {
      title: "Print Design",
      description: "Showcase your property's beauty and charm through captivating imagery, videos, and immersive virtual tours.",
      color: "indigo"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Website Benefits Section */}
        <div className="mb-20 md:mb-28">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:mb-16 md:text-4xl">
            Our Website Benefits
          </h2>
          
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-gray-700 transition-all hover:text-blue-600"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600">
                  {benefit.icon}
                </div>
                <span className="font-medium text-sm md:text-base">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:mb-16 md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group cursor-pointer rounded-xl p-6 transition-all hover:bg-gray-50"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;