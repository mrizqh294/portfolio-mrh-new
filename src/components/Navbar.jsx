import {useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
      hidden: {},
      visible: {
          transition: {
              staggerChildren: 0.2,
          },
      },
  };

  const fadeIn = (direction = "up") => {
    return {
      hidden: {
        opacity: 0,
        ...(direction === "left" && { x: -40 }),
        ...(direction === "right" && { x: 40 }),
        ...(direction === "up" && { y: -40 }),
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className= "bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <motion.div
        className="flex justify-between max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.div 
          className="flex items-center"
          variants={fadeIn("left")}
        >
          <h1 className="font-extrabold text-gray-500 dark:text-white">MRH</h1>
        </motion.div>

        <motion.div 
          variants={fadeIn("up")}
        >
          <ul className="hidden md:flex justify-center items-center gap-10 h-16 text-gray-500 dark:text-white font-medium">
            <li>
              <a href="#hero" className="block hover:text-gray-900 dark:hover:text-white hover:scale-110 transition">
                Beranda
              </a>
            </li>

            <li>
              <a href="#about" className="block hover:text-gray-900 dark:hover:text-white hover:scale-110 transition">
                Tentang Saya
              </a>
            </li>

            <li>
              <a href="#portfolio" className="block hover:text-gray-900 dark:hover:text-white hover:scale-110 transition">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="block hover:text-gray-900 dark:hover:text-white hover:scale-110 transition">
                Kontak
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="flex items-center"
          variants={fadeIn("right")}
        >
          <ThemeToggle />
          <button
            className="md:hidden text-gray-500 dark:text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </motion.div>

      </motion.div>

      {/* Mobile nav */}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul variants={listVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4 text-gray-500 dark:text-white font-medium"
            >
              <motion.li variants={itemVariants}>
                  <a href="#hero" onClick={() => setIsOpen(false)}>
                    Beranda
                  </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                  <a href="#about" onClick={() => setIsOpen(false)}>
                    Tentang Saya
                  </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                  <a href="#portfolio" onClick={() => setIsOpen(false)}>
                    Portfolio
                  </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                  <a href="#education" onClick={() => setIsOpen(false)}>
                    Pendidikan
                  </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Kontak
                  </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    

    </nav>
  );
};

export default Navbar;