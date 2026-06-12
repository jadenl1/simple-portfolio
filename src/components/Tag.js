import React from "react";
import { skillColorMap } from "../data/skillColors";

const Tag = ({ label }) => {
	const { bg, text } = skillColorMap[label.trim()] || { bg: "#E0E0E0", text: "#333" };

	// Derive a very subtle border color from the background rgba if available
	let borderColor = "rgba(255, 255, 255, 0.08)";
	if (typeof bg === "string" && bg.startsWith("rgba(")) {
		borderColor = bg.replace(
			/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[^)]+\)/,
			"rgba($1, $2, $3, 0.18)",
		);
	}

	return (
		<span
			style={{
				backgroundColor: bg,
				color: text,
				fontSize: "10px",
				fontWeight: 400,
				padding: "0 10px",
				borderRadius: "3px",
				height: "24px",
				display: "inline-flex",
				alignItems: "center",
				marginRight: "3px",
				marginBottom: "3px",
				border: `0.5px solid ${borderColor}`,
			}}
		>
			{label}
		</span>
	);
};

export default Tag;
