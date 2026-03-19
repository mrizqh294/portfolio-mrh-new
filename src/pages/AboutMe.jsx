import { motion } from "framer-motion";

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

    return(
        <section 
            id="about" 
            className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex items-center"
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
                    <p className="text-gray-500 mt-2">
                        Fullstack Developer
                    </p>
                </motion.div>

                {/* ================= CONTENT ================= */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-10"
                >

                    {/* ========= LEFT (TEXT) ========= */}
                    <motion.div variants={item}>
                        <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                            Lulusan S1 Teknik Informatika dengan IPK 3,69/4,00 dan pengalaman
                            magang sebagai Backend Developer selama 6 bulan. Berfokus pada
                            pengembangan sistem backend dan RESTful API menggunakan Laravel,
                            Django, dan Node.js.
                        </p>

                        <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
                            Berpengalaman dalam membangun dan mengelola API serta integrasi
                            dengan database seperti MySQL dan PostgreSQL. Terbiasa menggunakan
                            Git dan Postman dalam workflow pengembangan.
                        </p>

                        <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
                            Memiliki kemampuan analisis yang baik, detail-oriented, serta mampu
                            bekerja secara individu maupun dalam tim untuk menghasilkan solusi
                            yang efisien dan scalable.
                        </p>
                    </motion.div>

                    {/* ========= RIGHT (SKILLS) ========= */}
                    <motion.div 
                        variants={container}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            "Laravel",
                            "Node.js",
                            "Django",
                            "MySQL",
                            "PostgreSQL",
                            "Git",
                            "Postman",
                            "Tailwind CSS",
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ scale: 1.05 }}
                                className="
                                    bg-gray-100 dark:bg-gray-800
                                    text-gray-900 dark:text-white
                                    p-4 rounded-xl text-center
                                    shadow-sm hover:shadow-lg
                                    transition-all duration-300
                                    cursor-pointer
                                "
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;