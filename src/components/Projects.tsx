import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "GitFlow",
    description: "Lightweight self-hosted CI/CD platform",
    tech: ["Go", "React", "Docker", "WebSockets"],
    link: "https://github.com/upsaurav12/gitflow"
  },
  {
    title: "bootstrap-cli",
    description: "CLI to scaffold Golang REST API templates",
    tech: ["Go", "Cobra", "Docker"],
    link: "https://github.com/upsaurav12/bootstrap"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center justify-between">
                  {project.title}
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-primary"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
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
  );
};

export default Projects;
