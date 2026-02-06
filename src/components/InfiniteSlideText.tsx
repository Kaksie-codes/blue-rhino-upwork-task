import { motion } from "framer-motion";

interface InfiniteSlideTextProps {
  text?: string;
  className?: string;
  speed?: number; // Duration in seconds for one complete cycle
  strokeColor?: string;
  strokeWidth?: string;
}

const InfiniteSlideText = ({ 
  text = "CLIENT TESTIMONIALS", 
  className = "",
  speed = 25, // Slower = higher number
  strokeColor = "#D1D5F0", // Light blue/lavender outline
  strokeWidth = "2px"
}: InfiniteSlideTextProps) => {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap transaparent py-8 ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* Render text twice for seamless infinite loop */}
        {[0, 1].map((index) => (
          <div key={index} className="flex shrink-0">
            <span
              className="inline-block text-[100px] font-bold uppercase tracking-[0.05em] text-transparent md:text-[140px] lg:text-[180px]"
              style={{
                WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
                paddingRight: "120px", // Space between repetitions
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlideText;