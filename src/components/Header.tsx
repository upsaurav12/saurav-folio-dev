import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground">
          Saurav Upadhyay
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground">
          Backend Developer | Open Source Contributor (CNCF)
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Software developer skilled in designing backend systems and contributing to CNCF open-source projects. 
          Passionate about scalable systems and automation.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5" />
          <span>India 🇮🇳</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-primary hover:bg-secondary"
          >
            <a href="https://github.com/upsaurav12" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-primary hover:bg-secondary"
          >
            <a href="https://linkedin.com/in/er-saurav-upadhyay" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-primary hover:bg-secondary"
          >
            <a href="https://x.com/sauravusingnvim" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-primary hover:bg-secondary"
          >
            <a href="mailto:sauravup041103@gmail.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
