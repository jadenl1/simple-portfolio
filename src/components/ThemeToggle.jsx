import React, { useLayoutEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        try {
            const saved = localStorage.getItem("portfolio-theme");
            if (saved === "light" || saved === "dark") return saved;
            const mobile = typeof window !== "undefined" && window.matchMedia?.("(max-width: 600px)").matches;
            return mobile ? "light" : "dark";
        } catch {
            const mobile = typeof window !== "undefined" && window.matchMedia?.("(max-width: 600px)").matches;
            return mobile ? "light" : "dark";
        }
    });

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#faf9f7" : "#181719");
        try {
            localStorage.setItem("portfolio-theme", theme);
        } catch {
            // The toggle still works when browser storage is unavailable.
        }
    }, [theme]);

    const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
    return (
        <button className="theme-toggle" data-theme={theme} type="button" aria-label={label} title={label}
            onClick={() => setTheme(current => current === "dark" ? "light" : "dark")}>
            <FiSun className="theme-icon theme-icon-sun" aria-hidden="true" />
            <FiMoon className="theme-icon theme-icon-moon" aria-hidden="true" />
        </button>
    );
}
