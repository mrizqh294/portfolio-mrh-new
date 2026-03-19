import { motion } from "framer-motion";

const Footer = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <footer className="bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center md:text-left"
        >

          {/* ================= BRAND ================= */}
          <motion.div variants={itemVariants}>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-2">
              Muhammad Rizki Haikal
            </h2>
            <p className="text-sm">
              Fullstack Developer
            </p>
          </motion.div>

          {/* ================= NAVIGASI ================= */}
          <motion.div variants={itemVariants}>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition duration-300">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition duration-300">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition duration-300">
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </motion.div>

          {/* ================= SOCIAL MEDIA ================= */}
          <motion.div variants={itemVariants}>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Ikuti Saya</h3>

            <div className="flex justify-center md:justify-start gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mrizqhykl"
                className="text-gray-500 hover:text-white transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.25-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mrizqh294"
                className="text-gray-500 hover:text-white transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.477 2 2 6.58 2 12.26c0 4.52 2.865 8.35 6.84 9.71.5.09.66-.22.66-.48 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0112 6.84c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.16.57.67.47A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mrizqh294"
                className="text-gray-500 hover:text-white transition duration-300 transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" 
                    className="w-6 h-6" 
                    viewBox="0 0 640 640"
                >

                    <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z"/>
                </svg>
              </a>

            </div>
          </motion.div>
        </motion.div>

        {/* ================= COPYRIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-6 text-center text-sm"
        >
          © 2026 Muhammad Rizki Haikal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;