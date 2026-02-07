import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ easeOut (TS-safe)
    },
  },
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Strategic Approach",
      description:
        "Our team of talented designers and developers takes a strategic approach to every project, ensuring that your website not only looks visually appealing but also functions seamlessly to drive bookings and conversions.",
    },
    {
      title: "Custom Solutions",
      description:
        "We understand that every hotel is unique, which is why we offer fully customized solutions to meet your individual needs and preferences. Whether you're a boutique hotel or a luxury resort, we'll work closely with you to create a website that sets you apart from the competition.",
    },
    {
      title: "Specialized Expertise",
      description:
        "With years of experience in the hospitality industry, we specialize in creating stunning websites tailored specifically for hotels and resorts. We know what it takes to showcase your property's unique charm and amenities effectively.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;