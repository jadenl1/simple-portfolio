import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { FaFolder } from "react-icons/fa";

import { LuFingerprint } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
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
import FadeInSection from "./components/FadeInSection";
import RotatingWord from "./components/RotatingWord";

function App() {
	const [openExperience, setOpenExperience] = useState(null);
	const [openProject, setOpenProject] = useState(null);
	const toggleExperience = (idx) => setOpenExperience(openExperience === idx ? null : idx);
	const toggleProject = (idx) => setOpenProject(openProject === idx ? null : idx);

	return (
		<div className="app" id="jaden">
			<div className="page">
				<motion.p
					className="site-label"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
				>
					leonardjaden.<RotatingWord />
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
							href="https://drive.google.com/file/d/1pVjeoFd5v5BYOREEk7XZ3qC7295Jl3zV/view?usp=sharing"
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
					id="experience"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 0.1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
				/>
				<FadeInSection delay={0.4}>
					<div className="page-section">
						<div className="section-title">
							<FiBriefcase className="icon-inline" />
							<h1>Experience</h1>
						</div>
						<ul className="experience-grid">
							{experiences.map((exp, idx) => (
								<li key={idx} className="experience-entry">
									<div className="experience-meta">
										<p className="experience-title">
											{exp.role} @ {exp.company}
										</p>
										<p className="experience-dates">
											{exp.details.props.children[0].props.children}
										</p>
									</div>
									<div className="experience-description">
										<p>{exp.details.props.children[1].props.children}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</FadeInSection>

				<motion.hr
					className="section-divider"
					id="experience"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 0.1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
				/>
				<FadeInSection delay={0.5}>
					<div className="page-section">
						<div className="section-title">
							<HiOutlineLightningBolt className="icon-inline" />
							<h1>Startups</h1>
						</div>
						<ul className="experience-grid">
							{startups.map((exp, idx) => (
								<li key={idx} className="experience-entry">
									<div className="experience-meta">
										<p className="experience-title">
											{exp.role} @ {exp.company}
										</p>
										<p className="experience-dates">
											{exp.details.props.children[0].props.children}
										</p>
									</div>
									<div className="experience-description">
										<p>{exp.details.props.children[1].props.children}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</FadeInSection>

				<hr className="section-divider" id="experience" />
				<FadeInSection>
					<div className="page-section">
						<div className="section-title">
							<TbHeartHandshake className="icon-inline" />
							<h1>Volunteer & Extracurricular</h1>
						</div>
						<ul className="experience-grid">
							{volunteer.map((exp, idx) => (
								<li key={idx} className="experience-entry">
									<div className="experience-meta">
										<p className="experience-title">
											{exp.role} @ {exp.company}
										</p>
										<p className="experience-dates">
											{exp.details.props.children[0].props.children}
										</p>
									</div>
									<div className="experience-description">
										<p>{exp.details.props.children[1].props.children}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</FadeInSection>

				<hr className="section-divider" id="projects" />
				<FadeInSection>
					<div className="page-section">
						<div className="section-title">
							<MdOutlineFolderCopy className="icon-inline" />
							<h1>Projects</h1>
						</div>
						<ul className="experience-list">
							{projects.map((proj, idx) => (
								<li key={idx} className="project-item">
									<div
										className="project-header"
										onClick={() => toggleProject(idx)}
									>
										<GoArrowUpRight className="project-icon" />
										<div className="project-info">
											<span className="project-title">{proj.title}</span>
											{proj.skills.split(",").map((skill) => (
												<span>
													<Tag key={skill} label={skill.trim()} />
												</span>
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
								</li>
							))}
						</ul>
					</div>
				</FadeInSection>

				<hr className="section-divider" id="photos" />
				<FadeInSection>
					<div className="page-section">
						<div className="section-title">
							<PiMountainsBold className="icon-inline" />
							<h1>Some of My Photos</h1>
						</div>
						<div className="photo-carousel">
							<div className="photo-track">
								{[...photos, ...photos].map((p, i) => (
									<div className="photo-card" key={i}>
										<img src={p.src} alt={p.label} />
									</div>
								))}
							</div>
						</div>
					</div>
				</FadeInSection>

				<hr className="section-divider" />
				<FadeInSection>
					<div className="page-section" id="footer">
						<p>
							If you would like to get in touch, feel free to reach out via email
							jleonardSTEM2021@gmail.com or connect with me on LinkedIn
						</p>
						<p>Portfolio designed & developed with love by Jaden Leonard</p>
						<Tag label="JavaScript" />
						<Tag label="React" />
						<Tag label="Node" />
					</div>
				</FadeInSection>
			</div>
		</div>
	);
}

export default App;
