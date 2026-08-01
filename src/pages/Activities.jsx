import { motion } from "framer-motion";
import sertifikat1 from "../assets/sertifikat1.png";
import sertifikat2 from "../assets/sertifikat2.png";
import sertifikat3 from "../assets/sertifikat3.png";
import sertifikat4 from "../assets/sertifikat4.png";
import sertifikat5 from "../assets/sertifikat5.png";

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: "Promt Engineering untuk Software Developer",
            description:
                "Dicoding Indonesia",
            image: sertifikat1,
        },
        {
            id: 2,
            title: "Belajar Dasar AI",
            description:
                "Dicoding Indonesia",
            image: sertifikat2,
        },
        {
            id: 3,
            title: "Jobs Ready: Skill (Bahasa)",
            description:
                "Wadhwani Foundation",
            image: sertifikat3,
        },
        {
            id: 4,
            title: "Belajar Dasar Pemrograman Javascript",
            description:
                "Dicoding Indonesia",
            image: sertifikat4,
        },
        {
            id: 5,
            title: "Belajar Dasar Pemrograman Web",
            description:
                "Dicoding Indonesia",
            image: sertifikat5,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 32 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="activities"
            className="py-24 bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto px-6 lg:px-20">
                {/* Header section */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Aktivitas &amp; Pelatihan
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-md mx-auto">
                        Rangkaian pelatihan, kompetisi, dan kegiatan yang
                        pernah saya ikuti untuk terus mengembangkan
                        kemampuan.
                    </p>
                </motion.div>

                {/* Grid card aktivitas */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    {activities.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 250, damping: 18 }}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl dark:border-gray-800 dark:bg-gray-800"
                        >
                            {/* Gambar aktivitas */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                {/* Judul */}
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>

                                {/* Deskripsi */}
                                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;
