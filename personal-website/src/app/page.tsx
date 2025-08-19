import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <header>
          <h1 className="text-4xl text-blue-500">Chris Pickreign!</h1>
          <h2>Technical Leader | Software Engineer | Architect</h2>
          <nav style={{ margin: '2rem 0' }}>
            <Link href="/about">About</Link>{' | '}
            <Link href="/experience">Experience</Link>{' | '}
            <Link href="/skills">Skills</Link>{' | '}
            <Link href="/projects">Projects</Link>{' | '}
            <Link href="/education">Education</Link>{' | '}
            <Link href="/contact">Contact</Link>{' | '}
            <Link href="/resume">Download Resume</Link>
          </nav>
        </header>
        <section>
          <p>
            Experienced technical leader with 20+ years in software engineering, architecture, and team management. Passionate about building scalable solutions and driving innovation.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
