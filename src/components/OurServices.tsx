import { motion } from "framer-motion";
import type { Variants } from "framer-motion";



const OurServices = () => {
  const benefits = [
    {
      image: "/custom_design.png",
      title: "Custom Design"
    },
    {
      image: "/seo_friendly.png",
      title: "SEO Friendly"
    },
    {
      image: "/scalable_solutions.png",
      title: "Scalable Solutions"
    },
    {
      image: "/mobile_friendly.png",
      title: "Mobile Friendly"
    },
    {
      image: "/effective_call_to_actions.png",
      title: "Effective Call-to-Actions"
    },
    {
      image: "/satisfaction_guaranteed.png",
      title: "Satisfaction Guaranteed"
    }
  ];

  const services = [
    {
      title: "Web Design & Development",
      description: "Ensure your website looks stunning and performs flawlessly across all devices. From desktop to smartphone and tablets.",
      color: "blue"
    },
     {
      title: "Email Marketing",
      description: "Seamlessly integrate booking plugins and reservation system to streamline the booking process for your guests.",
      color: "orange"
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

  const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};


  return (
    <motion.section     
    className="bg-white py-16 md:py-24"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        {/* Website Benefits Section */}
        <div className="mb-20 md:mb-28">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold text-gray-900 md:mb-16 md:text-4xl"
             variants={itemVariants}
        >
            Our Website Benefits
          </motion.h2>
          
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2  md:gap-y-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                variants={itemVariants}
                key={index}
                className="flex items-center gap-3 text-gray-700 transition-all hover:text-blue-600"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="font-medium text-sm md:text-base">{benefit.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <motion.h2 
            variants={itemVariants}
            className="mb-12 text-center text-3xl font-bold text-gray-900 md:mb-16 md:text-4xl lg:text-5xl">
            Our Services
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
            {services.map((service, index) => (
              <motion.div
                key={index} 
                className="group cursor-pointer rounded-xl p-6 transition-all hover:bg-gray-50"
                variants={itemVariants}
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurServices;