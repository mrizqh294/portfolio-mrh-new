import { motion } from "framer-motion";

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Prisma ORM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const AboutMe = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="py-20 min-h-screen transition-colors duration-300 items-center"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* ================= TITLE ================= */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Tentang Saya
          </h2>
          {/* <p className="text-gray-500 mt-2">Fullstack Web Developer</p> */}
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-row-2 gap-10 items-start space-y-6 text-gray-700 dark:text-gray-300"
        >
          {/* ========= LEFT (TEXT) ========= */}
          <motion.div variants={item} className="text-center">
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
              Lulusan S1 Teknik Informatika dengan IPK 3,69/4,00 dan pengalaman
              magang sebagai Backend Developer selama 6 bulan. Berfokus pada
              pengembangan sistem backend dan RESTful API menggunakan Laravel,
              Django, dan Node.js.
            </p>

            <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
              Berpengalaman dalam membangun dan mengelola API serta integrasi
              dengan database seperti MySQL dan PostgreSQL. Terbiasa menerapkan
              metodologi pengembangan modern dan memanfaatkan AI-assisted tools
              untuk meningkatkan efisiensi proses pengembangan.
            </p>

            <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
              Memiliki kemampuan analisis yang baik, serta mampu bekerja secara
              individu maupun dalam tim untuk menghasilkan solusi yang efisien
              dan scalable.
            </p>
          </motion.div>

          {/* ========= RIGHT (CONTENT) ========= */}
          <motion.div variants={item}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-10 flex-wrap justify-center dark:bg-gray-800 rounded-2xl p-7"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="group relative text-center flex flex-col items-center justify-center gap-4
                            rounded-2xl
                            transition-colors duration-300
                          "
                >
                  <div className="h-12 w-12 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-full w-full object-contain
                                grayscale opacity-60
                                dark:opacity-100 dark:grayscale-0
                                transition-all duration-300
                                group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-400 dark:text-gray-300 transition-colors duration-300 hover:text-zinc-900 dark:hover:text-white">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
