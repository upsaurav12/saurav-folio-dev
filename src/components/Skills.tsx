import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  Languages: ["Go", "C++", "Python"],
  Web: ["React.js", "REST APIs", "HTML", "CSS", "JavaScript"],
  Databases: ["PostgreSQL", "MySQL"],
  DevOps: ["Docker", "CI/CD", "GitHub Actions", "Linux"]
};

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {skill}
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

export default Skills;
