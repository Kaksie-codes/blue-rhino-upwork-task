import { motion } from "framer-motion";
import Button from "./Button";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const HitYourGoals = () => {
  return (
    <motion.section
      className="bg-white py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Ready to hit your goals?
          </motion.h2>

          <motion.p
            className="mb-8 text-sm leading-relaxed text-black md:text-base lg:text-lg"
            variants={itemVariants}
          >
            Ready to take your hotel's online presence to the next level? Contact us
            today to schedule a consultation and see how we can help you create a
            website that wows your guests and drives results for your business.
          </motion.p>

          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <Button text="TALK TO OUR EXPERTS" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HitYourGoals;