"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, Briefcase, Wrench, UserCog, Trees, ExternalLink, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  /** optional: lets the “View Experience” button switch your SPA section */
  goToSection?: (key: string) => void;
};

export default function About({ goToSection }: Props) {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {/* ------- Column 1: Education ------- */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <CardTitle>Educational Background</CardTitle>
            </div>
            <CardDescription>University of Massachusetts Amherst — Dual Degrees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Graduate of the 2025 class with a B.S in <strong>Computer Science</strong> and a BBA in <strong>Finance</strong>.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cs">
                <AccordionTrigger className="text-base">Computer Science (selected coursework)</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <ul className="grid grid-cols-1 gap-1 md:grid-cols-2 list-disc pl-5">
                    <li>Algorithms & Data Structures</li>
                    <li>Operating Systems</li>
                    <li>Databases</li>
                    <li>Distributed/Scalable Systems</li>
                    <li>Information Retrieval (BM25, NDCG)</li>
                    <li>Machine Learning</li>
                    <li>Networks</li>
                    <li>Software Engineering</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance">
                <AccordionTrigger className="text-base">Finance (selected coursework)</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <ul className="grid grid-cols-1 gap-1 md:grid-cols-2 list-disc pl-5">
                    <li>Corporate Finance</li>
                    <li>Investments</li>
                    <li>Derivatives & Options</li>
                    <li>Fixed Income & Term Structure</li>
                    <li>Risk Management</li>
                    <li>Financial Modeling</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
          </CardFooter>
        </Card>

        {/* ------- Column 2: Professional ------- */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <CardTitle>Professional Background</CardTitle>
            </div>
            <CardDescription>Liberty Mutual · Consulting · Entrepreneurship</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Explore roles, scope, and outcomes.</p>
              <Button
                size="sm"
                onClick={() => goToSection?.("experience")}
                asChild={!goToSection}
                variant="outline"
              >
                {/* If goToSection isn’t passed, this falls back to a hash link you can anchor */}
                <Link href="#experience" className="inline-flex items-center gap-1">
                  View Experience <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <Separator />

            <Accordion type="multiple" className="w-full">
              {/* Software Engineering */}
              <AccordionItem value="se">
                <AccordionTrigger className="text-base">Software Engineering</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <div>
                    <div className="font-medium">Associate Software Engineer — Liberty Mutual (current)</div>
                    <p>Building production features and UI systems; shipping reliable, data-driven applications.</p>
                  </div>
                  <div>
                    <div className="font-medium">Software Engineering Intern — Liberty Mutual (2 internships)</div>
                    <p>Contributed to front-end features, APIs, testing, and deployment patterns.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Consulting */}
              <AccordionItem value="consulting">
                <AccordionTrigger className="text-base">Consulting</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <div className="font-medium">Isenberg Undergraduate Consulting Group — 3 years</div>
                  <p>Client-facing analyses, research, and delivery—synthesizing insights into actionable recommendations.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Entrepreneurship / Landscaping */}
              <AccordionItem value="landscaping">
                <AccordionTrigger className="text-base">Entrepreneurship — Landscaping</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <div className="font-medium">Founder & Operator — 5+ years</div>
                  <p>Grew a local landscaping business end-to-end: sales, scheduling, ops, and customer service.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-2">
            <Badge variant="secondary">Software Eng</Badge>
            <Badge variant="secondary">Consulting</Badge>
            <Badge variant="secondary">Entrepreneurship</Badge>
          </CardFooter>
        </Card>

        {/* ------- Column 3: Hobbies & Interests ------- */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <CardTitle>Hobbies & Interests</CardTitle>
            </div>
            <CardDescription>What I’m into outside of work</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div>
              <h4 className="mb-2 text-sm font-medium text-muted-foreground">Active</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Golf (+2)</Badge>
                <Badge>Hockey</Badge>
                <Badge>Soccer</Badge>
                <Badge>Weight Lifting</Badge>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-medium text-muted-foreground">Games</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Poker</Badge>
                <Badge>Fantasy Football</Badge>
                <Badge>Catan</Badge>
              </div>
            </div>

            <Separator />

            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Amherst, MA
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">Let’s connect</div>
            <div className="flex items-center gap-2">
              <Button asChild size="icon" variant="secondary" aria-label="GitHub">
                <Link href="https://github.com/ChrisPickreign" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="secondary" aria-label="LinkedIn">
                <Link href="https://www.linkedin.com/in/chrispickreign" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
