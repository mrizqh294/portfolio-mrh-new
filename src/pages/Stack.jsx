import { motion } from "framer-motion";

const techStack = [
    {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
];

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

const Stack = () => {
    return (
        <section className="w-full bg-white dark:bg-gray-900 py-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Tech Stack
                    </h2>
                    <p className="mt-3 text-zinc-500 text-sm md:text-base max-w-md mx-auto">
                        Kumpulan teknologi yang saya gunakan untuk membangun
                        aplikasi dari sisi frontend hingga backend.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                    {techStack.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="group relative flex flex-col items-center justify-center gap-4
                                    rounded-2xl border border-zinc-200
                                    bg-white p-6
                                    transition-colors duration-300
                                    hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50"
                        >
                            <div className="h-12 w-12 flex items-center justify-center">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="h-full w-full object-contain
                                            grayscale opacity-60
                                            transition-all duration-300
                                            group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                            <span className="text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-900">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stack;
