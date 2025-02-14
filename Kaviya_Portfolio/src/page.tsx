import { Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer specializing in building exceptional digital experiences
              </p>
              <div className="flex gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  About Me
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/20">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="absolute inset-4 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Contact Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Let's Connect</h2>
            <p className="mb-8 text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="https://github.com">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://linkedin.com">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild>
                <Link href="mailto:hello@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by artificial intelligence",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI"],
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode support",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
]

const skills = [
  { name: "Frontend Development", level: "Advanced", icon: User },
  { name: "Backend Development", level: "Intermediate", icon: User },
  { name: "UI/UX Design", level: "Intermediate", icon: User },
  { name: "DevOps", level: "Beginner", icon: User },
]

