import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // ✅ easeOut-style curve
    },
  },
};

const Footer = () => {
  const footerColumns = [
    {
      links: [
        { name: "Hotels and Resorts", href: "#hotels" },
        { name: "Restaurants and Food Service", href: "#restaurants" },
        { name: "Travel and Tourism", href: "#travel" },
      ],
    },
    {
      links: [
        { name: "Event Planning and Management", href: "#events" },
        { name: "Hospitality Technology", href: "#technology" },
        { name: "Hospitality Real Estate", href: "#realestate" },
      ],
    },
    {
      links: [
        { name: "Facebook", href: "#facebook" },
        { name: "Instagram", href: "#instagram" },
        { name: "LinkedIn", href: "#linkedin" },
      ],
    },
    {
      text: (
        <>
          Design Agency © Copyright Blue Rhino.
          <br />
          Media. All Rights Reserved.
        </>
      ),
    },
  ];

  return (
    <motion.footer
      className="bg-[#22242F] text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {footerColumns.map((column, index) => (
            <motion.div key={index} variants={columnVariants}>
              {column.links ? (
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {column.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
