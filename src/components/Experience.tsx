import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "LFX Mentorship (CNCF)",
    role: "LFX Intern",
    period: "Jun 2025 – Aug 2025",
    achievements: [
      "Designed k8cache in Go, reducing latency from 40ms to ~10ms",
      "Improved CI coverage to 61% with unit/integration tests",
      "Added optional in-memory caching and backend pagination"
    ]
  },
  {
    title: "CNCF (Open Source Contributor)",
    role: "Contributor",
    period: "Jan 2024 – Present",
    achievements: [
      "Contributed 20+ PRs to Headlamp, External-DNS, Inspektor-Gadget, and KubeEdge",
      "Improved CI pipelines, added tests, and optimized React + Go code"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
