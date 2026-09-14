import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance",
    position: "Fullstack Web Developer",
    period: "Agu 2025 - Sekarang",
    description:
      "Mengembangkan berbagai aplikasi web dan sistem informasi, termasuk sistem DPT Pilkades, sistem penjualan dan stok apotek, serta website portofolio, dengan menangani frontend, backend, database, API, dan deployment.",
    technologies: [
      "Express.js",
      "Django",
      "Next.js",
      "React",
      "Laravel",
      "Prisma ORM",
      "MySQL",
      "Tailwind CSS",
      "REST API",
    ],
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
      id="experience"
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
          <h2 className="text-4xl font-bold mt-2 mb-4">Pengalaman</h2>

          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
            Berikut merupakan pengalaman kerja saya.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l border-gray-500 dark:border-gray-500 ml-4"
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
              <span className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-white border border-gray-900 dark:bg-gray-900 dark:border-gray-500" />

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 transition-colors duration-300 rounded-xl border border-gray-500 p-6 shadow-lg hover:border-gray-400 ">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.position}</h3>

                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm mt-3 md:mt-0">{exp.period}</span>
                </div>

                <p className="mt-5 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-gray-500 dark:text-gray-400 border border-gray-400/20 text-sm"
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
