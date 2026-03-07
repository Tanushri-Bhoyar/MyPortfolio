
import { SectionHeader } from "./SectionHeader";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
}

export function Contact({ email, phone, linkedin }: ContactProps) {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "tanushri-bhoyar",
      href: linkedin.startsWith('http') ? linkedin : `https://${linkedin}`,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-primary-foreground/70 text-lg">Have a project in mind or just want to say hi? My inbox is always open.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, idx) => (
              <a 
                key={idx}
                href={method.href}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
                rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="group p-8 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm font-medium opacity-60 uppercase tracking-widest mb-1">{method.label}</p>
                  <p className="text-lg font-semibold">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-12 h-14 text-lg">
              Send a Message <Send className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
