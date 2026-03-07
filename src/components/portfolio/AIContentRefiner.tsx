
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Copy, Check, RotateCcw } from "lucide-react";
import { refinePortfolioContent } from "@/ai/flows/refine-portfolio-content";

export function AIContentRefiner() {
  const [draft, setDraft] = useState("");
  const [refined, setRefined] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRefine = async () => {
    if (!draft) return;
    setIsLoading(true);
    try {
      const result = await refinePortfolioContent({
        contentType: 'aboutMe',
        draftContent: draft
      });
      setRefined(result.refinedContent);
    } catch (error) {
      console.error("AI refinement failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(refined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-primary text-primary-foreground p-8">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-accent" />
                <CardTitle className="font-headline text-2xl">AI Description Refiner</CardTitle>
              </div>
              <CardDescription className="text-primary-foreground/70 text-base">
                Use our built-in AI tool to polish your "About Me" or project descriptions.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Your Draft</label>
                <Textarea 
                  placeholder="Paste your rough draft here..."
                  className="min-h-[150px] text-lg p-4 border-border/50 focus:ring-primary/20"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <Button 
                  onClick={handleRefine} 
                  disabled={isLoading || !draft}
                  className="w-full h-12 bg-primary text-white font-bold"
                >
                  {isLoading ? "AI is working..." : "Refine with AI"}
                  {!isLoading && <Sparkles className="ml-2 w-4 h-4" />}
                </Button>
              </div>

              {refined && (
                <div className="space-y-4 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Refined Content</label>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-primary hover:bg-secondary">
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? "Copied" : "Copy"}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setRefined("")} className="text-muted-foreground hover:bg-secondary">
                        <RotateCcw className="w-4 h-4 mr-2" /> Start Over
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-primary/10 text-lg leading-relaxed whitespace-pre-wrap italic text-foreground/80">
                    {refined}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
