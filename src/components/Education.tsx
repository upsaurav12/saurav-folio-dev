import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>
        
        <Card className="border-border hover:border-primary transition-colors">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl text-foreground">
                  B.Tech in CSE (AI-ML)
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-1">
                  SRM Institute of Science and Technology
                </CardDescription>
              </div>
              <Badge variant="secondary">2022 – 2026</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">CGPA:</span> 8.25/10
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
