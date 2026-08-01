import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle(
                "dark",
                savedTheme === "dark"
            );
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
        );
    };

    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle dark mode"
            className={`relative inline-flex items-center
                    w-16 h-8 rounded-full
                    transition-colors duration-300
                    ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
        >
            {/* Icon matahari (kiri) */}
            <i
                className={`fa-regular fa-sun text-xs ml-1.5
                        transition-colors duration-300
                        ${isDark ? "text-gray-500" : "text-yellow-500"}`}
            ></i>

            {/* Icon bulan (kanan) */}
            <i
                className={`fa-regular fa-moon text-xs mr-1.5 ml-auto
                        transition-colors duration-300
                        ${isDark ? "text-blue-200" : "text-gray-400"}`}
            ></i>

            {/* Knob */}
            <span
                className={`absolute top-1 left-1
                        w-6 h-6 rounded-full bg-white shadow-md
                        transition-transform duration-300
                        ${isDark ? "translate-x-8" : "translate-x-0"}`}
            ></span>
        </button>
    );
};

export default ThemeToggle;
