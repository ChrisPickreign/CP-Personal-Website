'use client';

import { useState } from "react";
import styles from "./page.module.css";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Footer from "../components/sections/Footer";
import Landing from "../components/sections/Landing";
import ShadcnNavigation from "../components/custom/shadcn-navigation";

const navLinks = [
	{ key: "home", label: "Home" },
	{ key: "about", label: "About" },
	{ key: "experience", label: "Experience" },
	{ key: "skills", label: "Skills" },
	{ key: "projects", label: "Projects" },
];

function renderSection(section: string) {
	switch (section) {
		case "about":
			return <About />;
		case "experience":
			return <Experience />;
		case "skills":
			return <Skills />;
		case "projects":
			return <Projects />;
		default:
			return <Landing />; // Default to Home section
	}
}

export default function Home() {
	const [activeSection, setActiveSection] = useState("home");

	return (
		<div className={styles.page}>
			<ShadcnNavigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
				navLinks={navLinks}
			/>
			<main
				className={styles.main}
				style={{ fontFamily: "var(--font-geist-mono)", padding: "2rem" }}
			>
				{renderSection(activeSection)}
			</main>
			<Footer />
		</div>
	);
}
