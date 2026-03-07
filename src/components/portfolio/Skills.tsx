
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Cpu,
  Braces
} from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'java': return <Cpu className="w-5 h-5" />;
      case 'javascript': return <Code2 className="w-5 h-5" />;
      case 'react': return <Layout className="w-5 h-5" />;
      case 'python': return <Terminal className="w-5 h-5" />;
      default: return <Braces className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white/50">
      <div className="container px-4 mx-auto">
        <SectionHeader 
          title="My Technology Stack" 
          subtitle="A comprehensive look at the tools and technologies I use to bring ideas to life."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {getIcon(skill.name)}
              </div>
              <h3 className="font-headline font-semibold text-lg">{skill.name}</h3>
              <Badge variant="secondary" className="bg-secondary/50 text-primary text-[10px] uppercase tracking-wider">
                Proficient
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
