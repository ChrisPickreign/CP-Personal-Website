
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";


interface LandingProps {
  setActiveSection?: (section: string) => void;
}

export default function Landing({ setActiveSection }: LandingProps) {
  const [showExplore, setShowExplore] = useState(false);
  const bioRef = useRef<HTMLDivElement>(null);

  // Fallback to no-op if not provided
  const handleSection = setActiveSection || (() => {});

  useEffect(() => {
    if (showExplore && bioRef.current) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showExplore]);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,hsl(var(--primary)/0.15),transparent_60%)]" />

        <div className="container mx-auto max-w-4xl px-6 py-24 text-center">
          <Image
            src="/HEADSHOT.JPG"
            alt="Chris Pickreign headshot"
            width={120}
            height={120}
            priority
            sizes="120px"
            className="mx-auto mb-6 rounded-full ring-2 ring-primary/20 shadow-lg"
          />

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Chris Pickreign<span className="text-primary"></span>
          </h1>

          <h2 className="mt-3 text-lg md:text-xl text-muted-foreground">
            Software Engineer&nbsp;|&nbsp;Consultant&nbsp;|&nbsp;Founder
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
            Passionate about solving problems at the intersection of technology and business
          </p>

          <Button
            className="mt-8 bg-slate-600 hover:bg-slate-700 text-white"
            onClick={() => {
              setShowExplore(true);
              setTimeout(() => {
                bioRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            variant="default"
            size="lg"
          >
            Explore More
          </Button>
        </div>
      </section>

      <section
        ref={bioRef}
        className={`py-24 bg-white dark:bg-background flex items-center justify-center transition-opacity duration-500 ${showExplore ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
  <Card className="w-full max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Hi, I&apos;m Chris Pickreign—a passionate software engineer, consultant, and founder.<br /><br />
              I recently graduated from the University of Massachusetts Amherst with degrees in Computer Science and Finance.<br /><br />
              I love building impactful solutions and collaborating with teams to drive innovation. My experience spans full-stack development, strategy consulting, and technical leadership.<br /><br />
              Feel free to explore my work and connect!
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap justify-center gap-4 mt-8">
            <Button className="bg-slate-600 hover:bg-slate-700 text-white" onClick={() => handleSection("projects")}>Projects</Button>
            <Button className="bg-slate-600 hover:bg-slate-700 text-white" onClick={() => handleSection("experience")}>Experience</Button>
            <Button className="bg-slate-600 hover:bg-slate-700 text-white" onClick={() => handleSection("about")}>About</Button>
            <Button className="bg-slate-600 hover:bg-slate-700 text-white" onClick={() => handleSection("contact")}>Contact</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
