import React, { useEffect, useState } from "react";
import { LiquidGlass } from "quick-liquid/react";
import { LuFingerprint } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbHeartHandshake, TbTimeline } from "react-icons/tb";
import { PiMountainsBold } from "react-icons/pi";
import ThemeToggle from "./ThemeToggle";
import "./SideNav.css";

const about = { id: "about", label: "About", Icon: LuFingerprint };
const sections = [
    { id: "experience", label: "Experience", Icon: FiBriefcase },
    { id: "startups", label: "Startups", Icon: HiOutlineLightningBolt },
    { id: "community", label: "Volunteer & Extracurricular", Icon: TbHeartHandshake },
    { id: "projects", label: "Projects", Icon: MdOutlineFolderCopy },
];
const ending = [
    { id: "photos", label: "Photos", Icon: PiMountainsBold },
];
const defaultItems = [about, ...sections, ...ending];
const timeline = { id: "timeline", label: "Timeline", Icon: TbTimeline };
const timelineItems = [about, timeline, ...ending];
const allItems = [about, ...sections, timeline, ...ending];
const mobileGlassConfig = {
    material: "clear",
    borderRadius: 999,
    blur: 2,
    tintOpacity: 0.1,
    refractionStrength: 16,
    chromaticAberration: 0.08,
    edgeHighlight: 0,
    specularStrength: 0,
    elevation: 0,
};

export default function SideNav({ view }) {
    const items = view === "timeline" ? timelineItems : defaultItems;
    const [active, setActive] = useState("about");
    const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 600);
    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    useEffect(() => {
        let frame;
        const update = () => {
            frame = undefined;
            const targets = items.map(item => document.getElementById(item.id)).filter(Boolean);
            let current = targets[0]?.id;
            for (const target of targets) {
                if (target.getBoundingClientRect().top <= window.innerHeight * 0.3) current = target.id;
            }
            if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                current = targets[targets.length - 1]?.id;
            }
            if (current) setActive(current);
        };
        const schedule = () => {
            if (frame === undefined) frame = requestAnimationFrame(update);
        };
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        const observer = new ResizeObserver(schedule);
        observer.observe(document.body);
        update();
        return () => {
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            observer.disconnect();
            if (frame !== undefined) cancelAnimationFrame(frame);
        };
    }, [items]);

    return <LiquidGlass as="nav" className="side-nav" aria-label="Page sections" active={isMobile}
        config={mobileGlassConfig} animateIn={false}>
        {allItems.map(({ id, label, Icon }) => {
            const visible = items.some(item => item.id === id);
            const goToSection = event => {
                event.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            };
            return <div key={id} className="side-nav-slot" data-visible={visible} aria-hidden={!visible}
                style={{ "--entrance-delay": `${100 + Math.max(0, items.findIndex(item => item.id === id)) * 70}ms` }}>
                <a href={`#${id}`} aria-label={label} tabIndex={visible ? undefined : -1}
                    title={label} aria-current={active === id ? "location" : undefined} onClick={goToSection}>
                    <Icon aria-hidden="true" />
                </a>
            </div>;
        })}
        <div className="side-nav-slot side-nav-theme" style={{ "--entrance-delay": "520ms" }}><ThemeToggle /></div>
    </LiquidGlass>;
}
