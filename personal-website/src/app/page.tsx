'use client';

import { useState } from "react";
import styles from "./page.module.css";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import ShadcnNavigation from "../components/ui/shadcn-navigation";

const navLinks = [
	{ key: "home", label: "Home" },
	{ key: "about", label: "About" },
	{ key: "experience", label: "Experience" },
	{ key: "skills", label: "Skills" },
	{ key: "projects", label: "Projects" },
	{ key: "education", label: "Education" },
	{ key: "contact", label: "Contact" },
	{ key: "resume", label: "Download Resume" },
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
				style={{ fontFamily: "sans-serif", padding: "2rem" }}
			>
				{renderSection(activeSection)}
			</main>
			<Footer />
		</div>
	);
}
