
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  tags: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Explore some of my recent work, ranging from web clones to management systems."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-border/50 bg-white group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/60 text-primary/80 font-medium text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="font-headline text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                {project.link && (
                  <Button size="sm" className="flex-1 bg-primary text-white hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                )}
                {project.github && (
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 text-primary hover:bg-secondary">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
