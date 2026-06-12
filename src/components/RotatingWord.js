import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["work", "development", "student", "design", "projects", "hackathons"];

const RotatingWord = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((i) => (i + 1) % words.length);
		}, 2200);
		return () => clearInterval(interval);
	}, []);

	return (
		<span className="rotating-word-wrapper">
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={words[index]}
					className="rotating-word"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
};

export default RotatingWord;
