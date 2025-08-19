'use client';

import { useState } from "react";
import styles from "./page.module.css";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
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
		case "education":
			return <Education />;
		case "contact":
			return <Contact />;
		case "resume":
			return <Resume />;
		default:
			return (
				<section>
					<h1 className="text-4xl text-blue-500">Chris Pickreign!</h1>
					<h2>Technical Leader | Software Engineer | Architect</h2>
					<p>
						Experienced technical leader with 20+ years in software engineering,
						architecture, and team management. Passionate about building scalable
						solutions and driving innovation.
					</p>
				</section>
			);
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
