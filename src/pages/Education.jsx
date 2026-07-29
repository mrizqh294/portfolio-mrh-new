import { motion } from "framer-motion";

const experiences = [
  {
    company: "Apotek Alfamed",
    position: "Freelance Web Developer",
    period: "Jul 2025 - Okt 2025",
    description:
      "Membangun sistem informasi penjualan berbasis web dari nol menggunakan framework Laravel dan MySQL, Mengotomatisasi pelaporan penjualan apotek kedalam format excel.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Mattwebsite"],
  },
  {
    company: "PT. Kunci Transformasi Digital",
    position: "Backend Developer",
    period: "Agu 2023 - Des 2023",
    description:
      "Mengembangkan API untuk dashboard website sekolah dengan menggunakan framework Django, Berhasil menyelesaikan 10+ endpoint API, Lulus magang dengan nilai A.",
    technologies: ["Django", "PostgreSQL", "Git", "REST API"],
  },
  
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Pengalaman Kerja dan Proyek
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
            Berikut merupakan pengalaman kerja dan proyek yang sudah saya kerjakan.
          </p>

        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l-2 border-gray-900 dark:border-white ml-4"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.02,
                x: 8,
              }}
              className="relative mb-12 ml-8"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-gray-900 border-4 border-gray-900 dark:bg-white dark:border-white" />

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 transition-colors duration-300 rounded-xl border border-gray-500 p-6 shadow-lg hover:border-cyan-500 ">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.position}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm mt-3 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-gray-500 dark:text-gray-400 border border-cyan-500/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;