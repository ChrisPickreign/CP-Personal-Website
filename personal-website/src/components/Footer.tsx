import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        height: "70px", // taller footer
        background: "#171717",
        color: "#ededed",
        textAlign: "center",
        borderTop: "1px solid #333",
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",           // center vertically
        alignItems: "center",      // vertical alignment
        justifyContent: "center",  // horizontal alignment
      }}
    >
      <span>&copy; {new Date().getFullYear()} Chris Pickreign. All rights reserved.</span>

   <div
        style={{
          position: "absolute",
          right: "1.5rem",
          display: "flex",
          alignItems: "center", // vertical align within footer height
          gap: "1rem",
        }}
      >
        <a
          href="https://github.com/ChrisPickreign"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 hover:text-blue-400 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/chrispickreign"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </footer>
  );
}
