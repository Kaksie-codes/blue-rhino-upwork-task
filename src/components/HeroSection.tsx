import Button from "./Button";
// import ScrollIndicator from "./ScrollIndicator";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative h-screen max-h-[1080px] w-full overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#0C225C]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/cloud.png')" }}
      />

      <div className="relative container mx-auto z-10 flex h-full flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <motion.div
          className="absolute top-6 left-4 md:top-8 lg:left-1 xl:left-0"
          initial="hidden"
          animate="visible"
          variants={fadeScale}
          custom={1.4}
        >
          <img
            src="/blue-rhino-logo.png"
            alt="Blue Rhino"
            className="h-10 md:h-12 w-auto"
          />
        </motion.div>

        {/* Airplane image */}
        <motion.div
          className="absolute z-10 top-[30%] mx-auto md:top-[4%] md:right-[10%]"
          initial="hidden"
          animate="visible"
          variants={fadeScale}
          custom={1.2}
        >
          <img
            src="/airplane.png"
            alt="Private Jet"
            className="h-[132px] md:h-48 lg:h-72 w-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* FLY */}
        <motion.div
          className="absolute top-[12%] left-[28%] hidden md:block"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
        >
          <h1 className="text-[140px] 2xl:text-[180px] font-bold text-[#092459]">
            FLY
          </h1>
        </motion.div>

        {/* HIGH */}
        <motion.div
          className="absolute top-[25%] right-[24%] hidden md:block"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.6}
        >
          <h1 className="text-[140px] 2xl:text-[180px] font-bold text-[#092459]">
            HIGH
          </h1>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          className="mt-[20vh] xl:mt-[300px] mb-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1.6}
        >
          Expert web design for the
          <br />
          Aviation Industry
        </motion.h2>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1.9}
        >
          <Button text="BOOK A CALL" />
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2.2}
        > */}
          <motion.button 
            initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2.2}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="absolute bottom-4 lg:bottom-8 right-4 group flex h-16 w-10 items-center justify-center rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            aria-label="Scroll down"
            >
            <svg 
                className="h-6 w-6 animate-bounce text-white transition-transform duration-300 group-hover:translate-y-1" 
                fill="none" 
                strokeWidth="2" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            </motion.button>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;