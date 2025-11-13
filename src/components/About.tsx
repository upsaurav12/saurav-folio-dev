import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        
        <Card className="border-border">
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a backend engineer passionate about building scalable systems and contributing to 
              open-source ecosystems. I enjoy working with Go, Docker, and CI/CD automation tools to 
              create efficient developer workflows. My focus is on writing clean, maintainable code 
              that solves real-world problems and improves developer experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
