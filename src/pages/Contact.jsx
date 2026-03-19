import { motion } from "framer-motion";

const Contact = () => {
  // Variants untuk animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // animasi muncul satu per satu
      },
    },
  };

  // Variants untuk setiap item
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    // Section utama contact
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Section */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Hubungi Saya
        </motion.h2>

        {/* Container utama (grid 2 kolom) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-10"
        >
          
          {/* =========================
              BAGIAN INFORMASI KONTAK
          ========================== */}
          <motion.div variants={itemVariants} className="space-y-6">
            
            {/* Email */}
            <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-500">mrizhs294@gmail.com</p>
            </div>

            {/* WhatsApp */}
            <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                WhatsApp
              </h3>
              <p className="text-gray-500">+62 838-2493-5871</p>
            </div>

            {/* Alamat */}
            <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Alamat
              </h3>
              <p className="text-gray-500">Bandung, Indonesia</p>
            </div>
          </motion.div>

          {/* =========================
              BAGIAN FORM KONTAK
          ========================== */}
          <motion.form
            variants={itemVariants}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow space-y-4"
          >
            
            {/* Input Nama */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Textarea Pesan */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Pesan
              </label>
              <textarea
                rows="4"
                placeholder="Tulis pesan..."
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            {/* Button Submit */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Kirim Pesan
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;