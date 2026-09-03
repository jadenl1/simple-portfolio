import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Shared reveal choreography: a section is revealed as one unit that walks its
// children from top to bottom. Containers only carry timing, items carry motion.
export const revealItem = {
	hidden: { opacity: 0, y: 18 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: EASE },
	},
};

// A nested container (a list, or a row inside a list). `stagger` of 0 makes its
// children appear together, which keeps a grid row from splitting apart.
export const revealGroup = (stagger = 0.08) => ({
	hidden: {},
	show: { transition: { staggerChildren: stagger } },
});

export const FadeInItem = ({ as = "div", children, ...rest }) => {
	const Component = motion[as] ?? motion.div;
	return (
		<Component variants={revealItem} {...rest}>
			{children}
		</Component>
	);
};

const FadeInSection = ({ children, className = "", delay = 0, ...rest }) => (
	<motion.div
		className={className}
		variants={{
			hidden: {},
			show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
		}}
		initial="hidden"
		whileInView="show"
		// Fire once the top of the section has come a little way into view, so a
		// tall section still starts revealing from its first row.
		viewport={{ once: true, margin: "0px 0px -12% 0px" }}
		{...rest}
	>
		{children}
	</motion.div>
);

export default FadeInSection;
