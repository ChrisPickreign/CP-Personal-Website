import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full h-[70px] bg-white/80 dark:bg-background/80 border-t border-border fixed bottom-0 left-0 flex items-center justify-center backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-background/60 text-muted-foreground dark:text-white"
    >
      <span>&copy; {new Date().getFullYear()} Chris Pickreign. All rights reserved.</span>

      <div className="absolute right-6 flex items-center gap-4">
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
