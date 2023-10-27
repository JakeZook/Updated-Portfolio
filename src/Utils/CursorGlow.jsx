import React, { useState, useEffect } from "react";
import "./CursorGlow.css";

const CursorGlow = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateCursorPosition = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener("mousemove", updateCursorPosition);

		return () => {
			document.removeEventListener("mousemove", updateCursorPosition);
		};
	}, []);

	const cursorStyle = {
		left: `${position.x}px`,
		top: `${position.y}px`,
	};

	return <div className="cursor-glow" style={cursorStyle}></div>;
};

export default CursorGlow;
