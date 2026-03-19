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

    return (
        <button
            onClick={toggleTheme}
            className="text-gray-500 dark:text-white
                    transition duration-300
                    px-4 py-2
                    hover:scale-110"
        >
            {theme === "light" ? (
                <i className="fa-regular fa-moon text-xl"></i>
            ) : (
                <i className="fa-regular fa-sun text-xl"></i>
            )}
        </button>
    );
};

export default ThemeToggle;