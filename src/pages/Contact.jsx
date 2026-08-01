import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
    {
        label: "Email",
        value: "mrizhs294@gmail.com",
        href: "mailto:mrizhs294@gmail.com",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        ),
    },
    {
        label: "WhatsApp",
        value: "+62 838-2493-5871",
        href: "https://wa.me/6283824935871",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.97.76l1.1 4.4a1 1 0 01-.44 1.1l-1.9 1.27a11.4 11.4 0 006 6l1.28-1.9a1 1 0 011.1-.44l4.4 1.1a1 1 0 01.76.97V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V5z"
            />
        ),
    },
    {
        label: "Alamat",
        value: "Subang, Indonesia",
        href: null,
        icon: (
            <>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </>
        ),
    },
];

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(""); // idle, loading, success, error

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwp5-hR92dYvjxNzDr62ofwGEZjdocEb9pRwfWw-72CVQ_wG36ROVDtlEV2SXlkefEFww/exec";

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("loading");

      try {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // penting karena Apps Script tidak selalu set CORS header
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-white dark:bg-gray-900 py-24 px-6"
        >
            <div className="max-w-5xl mx-auto">
                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Hubungi Saya
                    </h2>
                    <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-md mx-auto">
                        Punya proyek atau ide kolaborasi? Silakan hubungi
                        saya lewat salah satu kontak di bawah, atau kirim
                        pesan langsung lewat form.
                    </p>
                </motion.div>

                {/* Container utama (grid 2 kolom) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {/* =========================
                        BAGIAN INFORMASI KONTAK
                    ========================== */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        {contactInfo.map((item) => {
                            const Wrapper = item.href ? "a" : "div";
                            return (
                                <Wrapper
                                    key={item.label}
                                    href={item.href || undefined}
                                    className="group flex items-center gap-4 p-5 rounded-2xl
                                            border border-gray-200 dark:border-gray-800
                                            bg-white dark:bg-gray-900
                                            transition-all duration-300
                                            hover:border-indigo-300 dark:hover:border-indigo-500/40
                                            hover:shadow-lg hover:shadow-indigo-50 dark:hover:shadow-none"
                                >
                                    <span
                                        className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl
                                                bg-indigo-50 dark:bg-indigo-500/10
                                                text-gray-500
                                                transition-transform duration-300
                                                group-hover:scale-105"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            {item.icon}
                                        </svg>
                                    </span>
                                    <span className="text-left">
                                        <span className="block text-xs font-semibold tracking-wide uppercase text-zinc-400 dark:text-zinc-500 mb-0.5">
                                            {item.label}
                                        </span>
                                        <span className="block text-sm text-zinc-700 dark:text-zinc-200">
                                            {item.value}
                                        </span>
                                    </span>
                                </Wrapper>
                            );
                        })}
                    </motion.div>

                    {/* =========================
                        BAGIAN FORM KONTAK
                    ========================== */}
                    <motion.form
                        variants={itemVariants}
                        onSubmit={handleSubmit}
                        className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800
                                bg-white dark:bg-gray-900 space-y-4"
                    >
                        {/* Input Nama */}
                        <div>
                            <label className="block text-xs font-semibold tracking-wide uppercase text-gray-400 dark:text-gray-500 mb-1.5">
                                Nama
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan nama"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700
                                        bg-gray-50 dark:bg-gray-900
                                        text-gray-900 dark:text-white text-sm
                                        placeholder:text-gray-400
                                        outline-none transition-colors duration-300
                                        focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500/20"
                            />
                        </div>

                        {/* Input Email */}
                        <div>
                            <label className="block text-xs font-semibold tracking-wide uppercase text-zinc-400 dark:text-zinc-500 mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Masukkan email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700
                                        bg-gray-50 dark:bg-gray-900
                                        text-gray-900 dark:text-white text-sm
                                        placeholder:text-gray-400
                                        outline-none transition-colors duration-300
                                        focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500/20"
                            />
                        </div>

                        {/* Textarea Pesan */}
                        <div>
                            <label className="block text-xs font-semibold tracking-wide uppercase text-zinc-400 dark:text-zinc-500 mb-1.5">
                                Pesan
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Tulis pesan..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700
                                        bg-gray-50 dark:bg-gray-900
                                        text-gray-900 dark:text-white text-sm
                                        placeholder:text-gray-400
                                        outline-none transition-colors duration-300
                                        focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500/20"
                            ></textarea>
                        </div>

                        {/* Button Submit */}
                        <button
                            type="submit"
                            className="w-full bg-gray-900 dark:bg-gray-200 text-white dark:text-black text-sm font-medium py-3 rounded-lg
                                    transition-colors duration-300
                                    hover:bg-gray-700"
                        >
                            Kirim Pesan
                        </button>
                        {status === "success" && <p>Terkirim!</p>}
                        {status === "error" && <p>Gagal mengirim.</p>}
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
