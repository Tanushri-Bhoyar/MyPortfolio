
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={cn("h-1.5 w-20 bg-accent rounded-full mt-4", centered && "mx-auto")} />
    </div>
  );
}
