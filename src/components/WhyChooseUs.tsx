const WhyChooseUs = () => {
  const features = [
    {
      title: "Strategic Approach",
      description: "Our team of talented designers and developers takes a strategic approach to every project, ensuring that your website not only looks visually appealing but also functions seamlessly to drive bookings and conversions."
    },
    {
      title: "Custom Solutions",
      description: "We understand that every hotel is unique, which is why we offer fully customized solutions to meet your individual needs and preferences. Whether you're a boutique hotel or a luxury resort, we'll work closely with you to create a website that sets you apart from the competition."
    },
    {
      title: "Specialized Expertise",
      description: "With years of experience in the hospitality industry, we specialize in creating stunning websites tailored specifically for hotels and resorts. We know what it takes to showcase your property's unique charm and amenities effectively."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Why Choose Us?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;