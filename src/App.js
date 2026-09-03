import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { FaFolder } from "react-icons/fa";

import { LuFingerprint } from "react-icons/lu";
import { FiBriefcase, FiPlus } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";
import { PiMountainsBold } from "react-icons/pi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbHeartHandshake } from "react-icons/tb";

import { GoArrowUpRight } from "react-icons/go";

import { experiences } from "./data/experiences";
import { startups } from "./data/startups";
import { volunteer } from "./data/volunteer";
import { projects } from "./data/projects";
import { photos } from "./data/photos";

import Tag from "./components/Tag";
import FadeInSection, { FadeInItem, revealGroup } from "./components/FadeInSection";
import RotatingWord from "./components/RotatingWord";

// A list reveals its rows one after another; a row's own parts appear together.
const listStagger = revealGroup(0.07);
const rowTogether = revealGroup(0);

// Dividers fade to the 0.1 opacity the stylesheet gives them.
const Divider = (props) => (
	<motion.hr
		className="section-divider"
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 0.1 }}
		viewport={{ once: true, margin: "0px 0px -12% 0px" }}
		transition={{ duration: 0.5, ease: "easeOut" }}
		{...props}
	/>
);

// A two-column experience row. The <li> is `display: contents`, so the grid
// items inside it are what actually animate.
const ExperienceRow = ({ exp }) => (
	<motion.li className="experience-entry" variants={rowTogether}>
		<FadeInItem className="experience-meta">
			<p className="experience-title">
				{exp.role} @ {exp.company}
			</p>
			<p className="experience-dates">{exp.details.props.children[0].props.children}</p>
		</FadeInItem>
		<FadeInItem className="experience-description">
			<p>{exp.details.props.children[1].props.children}</p>
		</FadeInItem>
	</motion.li>
);

function App() {
	const [openExperience, setOpenExperience] = useState(null);
	const [openProject, setOpenProject] = useState(null);
	const toggleExperience = (idx) => setOpenExperience(openExperience === idx ? null : idx);
	const toggleProject = (idx) => setOpenProject(openProject === idx ? null : idx);
	const photoTrackRef = useRef(null);

	// Some browsers occasionally fail to start an infinite CSS animation on
	// first paint. Restarting it on mount guarantees the scroll begins.
	useEffect(() => {
		const track = photoTrackRef.current;
		if (!track) return;
		track.style.animation = "none";
		void track.offsetHeight;
		track.style.animation = "";
	}, []);

	return (
		<div className="app" id="jaden">
			<div className="page">
				<motion.p
					className="site-label"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
				>
					leonardjaden.
					<RotatingWord />
				</motion.p>
				<div className="page-header">
					<motion.div
						className="section-title"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					>
						<LuFingerprint className="icon-inline" />
						<h1>Jaden Leonard — SWE Intern @ Microsoft</h1>
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 0.5, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					>
						Developer from Maryland
						<br />
						Computer Science B.S @ University of Maryland, College Park
						<br />
						Computer Science M.S @ Bowie State University, expected Spring 2027
					</motion.p>

					<motion.span
						className="page-header-links"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
					>
						<a
							className="page-header-link"
							href="https://www.linkedin.com/in/leonardjaden/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="page-header-link-text">LinkedIn</span>
							<span className="link-icon">
								<GoArrowUpRight />
							</span>
						</a>
						<a
							className="page-header-link"
							href="https://github.com/jadenl1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="page-header-link-text">GitHub</span>
							<span className="link-icon">
								<GoArrowUpRight />
							</span>
						</a>
						<a
							className="page-header-link"
							href="https://drive.google.com/file/d/1sn_fvdxSXjTkl8Er-btH8WxAteI5qZrH/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="page-header-link-text">Resume</span>
							<span className="link-icon">
								<GoArrowUpRight />
							</span>
						</a>
					</motion.span>
				</div>

				<motion.hr
					className="section-divider"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.1 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
				/>
				{/* The first section sits above the fold, so it waits for the header. */}
				<FadeInSection delay={0.5} id="experience">
					<div className="page-section">
						<FadeInItem className="section-title">
							<FiBriefcase className="icon-inline" />
							<h1>Experience</h1>
						</FadeInItem>
						<motion.ul className="experience-grid" variants={listStagger}>
							{experiences.map((exp, idx) => (
								<ExperienceRow key={idx} exp={exp} />
							))}
						</motion.ul>
					</div>
				</FadeInSection>

				<Divider />
				<FadeInSection>
					<div className="page-section">
						<FadeInItem className="section-title">
							<HiOutlineLightningBolt className="icon-inline" />
							<h1>Startups</h1>
						</FadeInItem>
						<motion.ul className="experience-grid" variants={listStagger}>
							{startups.map((exp, idx) => (
								<ExperienceRow key={idx} exp={exp} />
							))}
						</motion.ul>
					</div>
				</FadeInSection>

				<Divider />
				<FadeInSection>
					<div className="page-section">
						<FadeInItem className="section-title">
							<TbHeartHandshake className="icon-inline" />
							<h1>Volunteer & Extracurricular</h1>
						</FadeInItem>
						<motion.ul className="experience-grid" variants={listStagger}>
							{volunteer.map((exp, idx) => (
								<ExperienceRow key={idx} exp={exp} />
							))}
						</motion.ul>
					</div>
				</FadeInSection>

				<Divider id="projects" />
				<FadeInSection>
					<div className="page-section">
						<FadeInItem className="section-title">
							<MdOutlineFolderCopy className="icon-inline" />
							<h1>Projects</h1>
						</FadeInItem>
						<motion.ul className="experience-list" variants={listStagger}>
							{projects.map((proj, idx) => (
								<FadeInItem as="li" key={idx} className="project-item">
									<div
										className="project-header"
										onClick={() => toggleProject(idx)}
									>
										<FiPlus
											className={`project-icon ${
												openProject === idx ? "open" : ""
											}`}
										/>
										<div className="project-info">
											<span className="project-title">{proj.title}</span>
										</div>
										<div className="project-tags">
											{proj.skills.split(",").map((skill) => (
												<Tag key={skill} label={skill.trim()} />
											))}
										</div>
									</div>
									<div
										className={`project-details ${
											openProject === idx ? "open" : ""
										}`}
									>
										{proj.details}
									</div>
								</FadeInItem>
							))}
						</motion.ul>
					</div>
				</FadeInSection>

				<Divider id="photos" />
				<FadeInSection>
					<div className="page-section">
						<FadeInItem className="section-title">
							<PiMountainsBold className="icon-inline" />
							<h1>Some of My Photos</h1>
						</FadeInItem>
						<FadeInItem className="photo-carousel">
							<div className="photo-track" ref={photoTrackRef}>
								{[...photos, ...photos].map((p, i) => (
									<div className="photo-card" key={i}>
										<img src={p.src} alt={p.label} />
									</div>
								))}
							</div>
						</FadeInItem>
					</div>
				</FadeInSection>

				<Divider />
				<FadeInSection>
					<div className="page-section" id="footer">
						<FadeInItem as="p">
							If you would like to get in touch, feel free to reach out via email
							jleonardSTEM2021@gmail.com or connect with me on LinkedIn
						</FadeInItem>
						<FadeInItem as="p">
							Portfolio designed & developed with love by Jaden Leonard
						</FadeInItem>
						<FadeInItem>
							<Tag label="JavaScript" />
							<Tag label="React" />
							<Tag label="Node" />
						</FadeInItem>
					</div>
				</FadeInSection>
			</div>
		</div>
	);
}

export default App;
