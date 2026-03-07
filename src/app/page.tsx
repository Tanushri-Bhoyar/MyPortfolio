
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { AIContentRefiner } from "@/components/portfolio/AIContentRefiner";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { PlaceHolderImages } from "./lib/placeholder-images";

export default function Home() {
  const skills = [
    { name: "Java" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Python" }
  ];

  const projects = [
    {
      id: "amazon-clone",
      title: "Amazon Clone",
      description: "A full-featured e-commerce clone with user authentication, product listings, and a shopping cart experience.",
      image: PlaceHolderImages.find(img => img.id === 'amazon-clone')?.imageUrl || "",
      imageHint: "ecommerce interface",
      tags: ["React", "Firebase", "CSS"],
      github: "https://github.com",
      link: "https://example.com"
    },
    {
      id: "invoice-manager",
      title: "Invoice Manager",
      description: "A professional tool for creating, tracking, and managing business invoices with automated tax calculations.",
      image: PlaceHolderImages.find(img => img.id === 'invoice-manager')?.imageUrl || "",
      imageHint: "business dashboard",
      tags: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com"
    },
    {
      id: "icecream-parlor",
      title: "Ice Cream Parlor",
      description: "A delightful landing page for a local ice cream shop featuring flavor menus and customer reviews.",
      image: PlaceHolderImages.find(img => img.id === 'icecream-parlor')?.imageUrl || "",
      imageHint: "dessert shop",
      tags: ["JavaScript", "HTML", "Tailwind"],
      link: "https://example.com"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero 
        name="Tanushri Bhoyar"
        role="BTech CSE Student"
        college="Jhulela Institute of Technology"
        description="I'm a passionate developer specializing in building modern web applications. Currently a 2nd-year student focusing on software engineering and innovative digital solutions."
      />

      <section id="about" className="py-24 bg-white">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <SectionHeader 
            title="About Me" 
            subtitle="I am a dedicated computer science student with a passion for problem-solving and software development. I enjoy exploring new technologies and building projects that make a difference."
          />
        </div>
      </section>

      <Skills skills={skills} />

      <Projects projects={projects} />

      <AIContentRefiner />

      <Contact 
        email="tanushribhoyar05@gmail.com"
        phone="8847757632"
        linkedin="linkedin.com/in/tanushri-bhoyar"
      />

      <footer className="py-12 text-center text-muted-foreground bg-white border-t">
        <div className="container px-4 mx-auto">
          <p className="font-medium">© {new Date().getFullYear()} Tanushri Bhoyar. Built with passion & DevCanvas.</p>
        </div>
      </footer>
    </main>
  );
}
