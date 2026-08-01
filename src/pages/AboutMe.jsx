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
            className="py-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 items-center"
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
                    className="max-w-3xl mx-auto space-y-6 text-center text-gray-700 dark:text-gray-300"
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
                            dengan database seperti MySQL dan PostgreSQL. Terbiasa menerapkan metodologi pengembangan 
                            modern dan memanfaatkan AI-assisted tools untuk meningkatkan efisiensi proses pengembangan.
                        </p>

                        <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
                            Memiliki kemampuan analisis yang baik, serta mampu
                            bekerja secara individu maupun dalam tim untuk menghasilkan solusi
                            yang efisien dan scalable.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;