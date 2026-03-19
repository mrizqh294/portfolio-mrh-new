import { motion } from "framer-motion";
import sicatatImg from "../assets/sicatat.png";

const Portfolio = () => {
  
  const projects = [
    {
      id: 1,
      title: "Sicatat Alfamed",
      image:
        sicatatImg,
      description:
        "Aplikasi POS dengan fitur pengelolaan data dan stok obat, Pencatatan Transaksi, dan Pembuatan laporan.",
      github: "https://github.com/mrizqh294/pointofsale-alfamed",
      live: "https://example-ecommerce.com",
    },
  ];

  // Variants animasi untuk container utama
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, 
      },
    },
  };

  // Variants animasi untuk tiap card
 
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // Section utama portfolio
    // id digunakan agar navbar bisa mengarah ke bagian ini
    <section
      id="portfolio"
      className="py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-14"
        >
          <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-3">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Saya
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
            Berikut beberapa project-project yang sudah saya kerjakan.
          </p>
        </motion.div>

        {/* Grid card project */}
        {/* Menggunakan motion.div agar semua card memiliki animasi bertahap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            // Card project
            // Tiap card dibuat dari data array projects
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8, scale: 1.02 }} // Efek hover modern
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl dark:border-gray-800 dark:bg-gray-800"
            >
              {/* Gambar project */}
              {/* overflow-hidden dipakai agar efek zoom gambar tetap rapi */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Konten card */}
              <div className="p-6">
                {/* Judul project */}
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                {/* Deskripsi singkat */}
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                {/* Tombol aksi */}
                {/* Terdiri dari tombol GitHub dan Live Demo */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;