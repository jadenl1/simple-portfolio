import React, { useEffect, useLayoutEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        let previousY = Math.max(0, window.scrollY);
        let distance = 0;
        const onScroll = () => {
            const y = Math.max(0, window.scrollY);
            const delta = y - previousY;
            previousY = y;
            if (y <= 24) {
                distance = 0;
                setHidden(false);
                return;
            }
            if (delta === 0) return;
            distance = Math.sign(delta) === Math.sign(distance) ? distance + delta : delta;
            if (Math.abs(distance) >= 8) {
                setHidden(distance > 0);
                distance = 0;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
        } catch {
            return "dark";
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
        <button className="theme-toggle" data-scroll-hidden={hidden} type="button" role="switch" aria-checked={theme === "light"} aria-label="Light mode" title={label}
            onClick={() => setTheme(current => current === "dark" ? "light" : "dark")}>
            <span className="theme-switch-thumb" aria-hidden="true">
                {theme === "dark" ? <FiMoon className="theme-switch-icon" /> : <FiSun className="theme-switch-icon" />}
            </span>
        </button>
    );
}
