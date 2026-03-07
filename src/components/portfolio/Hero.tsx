
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";

interface HeroProps {
  name: string;
  role: string;
  college: string;
  description: string;
}

export function Hero({ name, role, college, description }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(102,51,204,0.05),transparent),radial-gradient(circle_at_bottom_left,rgba(219,87,219,0.05),transparent)]">
      <div className="container px-4 mx-auto text-center z-10 fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Available for New Projects</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-primary">{name}</span>
        </h1>
        <h2 className="font-headline text-2xl md:text-3xl text-muted-foreground mb-8">
          {role} • {college}
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold transition-all hover:scale-105">
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-semibold border-primary/20 text-primary hover:bg-secondary transition-all">
            Contact Me <Code className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
