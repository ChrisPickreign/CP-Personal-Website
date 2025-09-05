"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, Briefcase, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      <div id="about-details" className="flex flex-col gap-16">
        {/* Education Section */}
        <section className="w-full py-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" /> Education
          </h2>
          <Card className="bg-background rounded-xl shadow-md border border-muted p-8">
            <CardHeader>
              <CardTitle>University of Massachusetts Amherst — Commonwealth Honors College</CardTitle>
              <CardDescription>B.S. Computer Science, BBA Finance, Dean's List all semesters, GPA: 3.80, ACT: 35</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 font-medium">Clubs: Consulting Group, Men's Club Golf</div>
              <div className="font-medium mb-1">Relevant Coursework:</div>
              <ul className="list-disc pl-6">
                <li>Algorithms & Data Structures, Operating Systems, Databases, Distributed Systems, Information Retrieval, Machine Learning, Networks, Software Engineering, Corporate Finance, Investments, Derivatives, Risk Management, Financial Modeling</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Professional Section */}
        <section className="w-full py-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="h-6 w-6" /> Professional Background
          </h2>
          <Card className="bg-background rounded-xl shadow-md border border-muted p-8">
            <CardHeader>
              <CardTitle>Liberty Mutual Insurance, Isenberg Consulting Group, Kelly Green Lawn Services</CardTitle>
              <CardDescription>Software engineer, consultant, and founder with diverse experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-2 list-disc pl-6">
                <li>Associate Software Engineer, Liberty Mutual (current)</li>
                <li>Software Engineering Intern, Liberty Mutual (2x)</li>
                <li>Consulting Group: Director, Analyst, Senior Advisor</li>
                <li>Founder & Operator, Kelly Green Lawn Services</li>
              </ul>
              <div className="font-medium mb-1">Key Skills & Experience:</div>
              <ul className="list-disc pl-6">
                <li>Full-stack development, AWS, React, Node, Spring Boot, DynamoDB, Express, Agile, Jira, PostgreSQL, GitHub</li>
                <li>Client-facing consulting, project management, entrepreneurship</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Hobbies Section */}
        <section className="w-full py-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6" /> Hobbies & Interests
          </h2>
          <Card className="bg-background rounded-xl shadow-md border border-muted p-8">
            <CardHeader>
              <CardTitle>Active, games, and more</CardTitle>
              <CardDescription>Golf (+2), hockey, soccer, poker, Catan, weight lifting.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="font-medium">Active:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge>Golf (+2)</Badge>
                  <Badge>Hockey</Badge>
                  <Badge>Soccer</Badge>
                  <Badge>Weight Lifting</Badge>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-medium">Games:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge>Poker</Badge>
                  <Badge>Fantasy Football</Badge>
                  <Badge>Catan</Badge>
                </div>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Amherst, MA
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Link href="https://github.com/ChrisPickreign" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/chrispickreign" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
