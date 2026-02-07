import Button from "./Button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HelpingBusinesses = () => {
  return (
    <section className="bg-white py-16 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
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
        </motion.div>

        {/* Responsive Website Showcase */}
        <motion.div
          className="bg-[#E3EAFC] py-24 md:py-32"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative mx-auto max-w-[900px]">
            {/* Desktop Image */}
            <motion.div
              className="mx-auto w-full md:w-[90%] h-auto md:h-[400px]"
              variants={itemVariants}
            >
              <img
                src="/iconic-desktop.png"
                alt="Iconic Desktop"
                className="w-full h-auto md:h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Mobile Image */}
            <motion.img
              src="/iconic-mobile.png"
              alt="Iconic Mobile"
              variants={itemVariants}
              className="
                absolute
                right-4
                bottom-[-40px]
                w-[120px]
                h-auto
                md:right-[-40px]
                md:bottom-[-60px]
                md:w-[220px]
                md:h-[400px]
                object-cover
                rounded-xl
                shadow-2xl
              "
            />
          </div>
        </motion.div>

        {/* Responsive Websites Section */}
        <motion.div
          className="mx-auto max-w-3xl -mt-12 md:-mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#151618]">
            WE BUILD USER-FRIENDLY
          </p>

          <h3 className="mb-6 text-3xl font-bold text-[#151618] md:text-4xl lg:text-5xl">
            Responsive Websites
          </h3>

          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            Experience seamless browsing on any device with our responsive design
            service. From desktops to smartphones, your hotel's website will adapt
            effortlessly to provide an optimal user experience, ensuring your
            guests can explore and book with ease, no matter where they are.
          </p>

          <Button text="Learn More" />
        </motion.div>
      </div>
    </section>
  );
};

export default HelpingBusinesses;