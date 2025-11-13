import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Saurav Upadhyay
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Backend Developer | Open Source Contributor (CNCF)
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Software developer skilled in designing backend systems and contributing to CNCF open-source projects. 
              Passionate about scalable systems and automation.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>India 🇮🇳</span>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
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
            </div>
          </div>
          
          {/* Right side - Profile picture */}
          <div className="flex justify-center md:justify-end">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20">
              <AvatarImage src="/placeholder.svg" alt="Saurav Upadhyay" />
              <AvatarFallback className="text-6xl bg-secondary text-foreground">SU</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
