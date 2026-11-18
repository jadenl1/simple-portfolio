import React, { useEffect, useState } from "react";
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

export default function SideNav({ view, onSelect }) {
    const items = view === "timeline" ? timelineItems : defaultItems;
    const [active, setActive] = useState("about");
    useEffect(() => {
        let frame;
        const update = () => {
            frame = undefined;
            const targets = items.map(item => document.getElementById(item.id)).filter(Boolean);
            const readingPosition = window.innerHeight / 2;
            let current = targets[0]?.id;
            let closestDistance = Infinity;
            for (const target of targets) {
                const rect = target.getBoundingClientRect();
                const distance = readingPosition < rect.top ? rect.top - readingPosition
                    : readingPosition > rect.bottom ? readingPosition - rect.bottom : 0;
                if (distance < closestDistance) {
                    closestDistance = distance;
                    current = target.id;
                }
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

    return <nav className="side-nav" aria-label="Page sections">
        {allItems.map(({ id, label, Icon }) => {
            const visible = items.some(item => item.id === id);
            const goToSection = event => {
                event.preventDefault();
                const section = document.getElementById(id);
                if (!section) return;
                onSelect?.(id);
                const rect = section.getBoundingClientRect();
                const top = id === "projects"
                    ? window.scrollY + rect.top - 40
                    : window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
                window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
            };
            return <div key={id} className="side-nav-slot" data-visible={visible} aria-hidden={!visible}
                style={{ "--entrance-delay": `${100 + Math.max(0, items.findIndex(item => item.id === id)) * 70}ms` }}>
                <a href={`#${id}`} aria-label={label} tabIndex={visible ? undefined : -1}
                    aria-current={active === id ? "location" : undefined} onClick={goToSection}>
                    <Icon aria-hidden="true" />
                    <span className="side-nav-label" aria-hidden="true">{label}</span>
                </a>
            </div>;
        })}
        <div className="side-nav-slot side-nav-theme" style={{ "--entrance-delay": "520ms" }}><ThemeToggle /></div>
    </nav>;
}
