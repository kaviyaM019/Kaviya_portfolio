import { Github, Linkedin, Mail, User, Code, Database, Palette, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Harvest Horizon",
    description: "A full-stack web application for beginner farmers with personalized farming recommendations",
    technologies: ["React", "Spring Boot", "MSSQL", "Java"],
  },
  {
    title: "Mobile Medical Robot",
    description: "IoT-based robot for monitoring vital signs and surgical levels, aiding in patient care",
    technologies: ["IoT", "Sensors", "Healthcare Tech"],
  },
  {
    title: "Web Development Projects",
    description: "Collection of web projects including Login Page, Portfolio, and Digital Calculator",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = [
  { name: "Web Development", level: "Intermediate", icon: Code },
  { name: "Database Management", level: "Intermediate", icon: Database },
  { name: "UI Development", level: "Intermediate", icon: Palette },
  { name: "Backend Development", level: "Intermediate", icon: Server },
];

function HeroSection() {
  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">Kaviya M</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer passionate about creating innovative digital solutions
          </p>
          <div className="flex gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button variant="outline">
              <User className="mr-2 h-4 w-4" /> About Me
            </Button>
          </div>
        </div>
        <div className="relative aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/20">
          <img src="/kaviya.jpg" alt="Profile" className="absolute inset-4 rounded-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function ProjectSection() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src="/harvest horizon.webp" alt={project.title} className="aspect-video w-full object-cover" />
              <CardContent className="p-4">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="bg-muted/50 px-4 py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold">Skills & Technologies</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={index} className="p-4">
              <CardContent className="flex items-center gap-4 p-0">
                <div className="rounded-lg bg-primary/10 p-2">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto text-center max-w-xl">
        <h2 className="mb-8 text-3xl font-bold">Let's Connect</h2>
        <p className="mb-8 text-muted-foreground">
          I'm always eager to learn and grow professionally. Feel free to reach out for collaborations or opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <Button as="a" href="https://github.com/kaviyaM019" target="_blank">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button as="a" href="https://www.linkedin.com/in/kaviyammunusamy" target="_blank">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
          <Button as="a" href="mailto:kaviya.m19@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
