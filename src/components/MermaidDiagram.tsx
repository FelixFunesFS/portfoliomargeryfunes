import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Maximize2, Minimize2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface MermaidDiagramProps {
  code: string;
  title?: string;
  description?: string;
  diagramType?: 'journey' | 'flow' | 'sequence' | 'er' | 'system';
  className?: string;
}

const diagramTypeBadges = {
  journey: { label: 'User Journey', color: 'bg-blue-500/20 text-blue-700 dark:text-blue-300' },
  flow: { label: 'Flow Diagram', color: 'bg-green-500/20 text-green-700 dark:text-green-300' },
  sequence: { label: 'Sequence', color: 'bg-purple-500/20 text-purple-700 dark:text-purple-300' },
  er: { label: 'ER Diagram', color: 'bg-amber-500/20 text-amber-700 dark:text-amber-300' },
  system: { label: 'System Architecture', color: 'bg-teal-500/20 text-teal-700 dark:text-teal-300' }
};

export const MermaidDiagram = ({
  code,
  title,
  description,
  diagramType = 'flow',
  className
}: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!code) {
        setError('No diagram code provided');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Dynamically import mermaid to avoid SSR issues
        const mermaid = (await import('mermaid')).default;
        
        // Configure mermaid with theme based on dark mode
        const isDark = document.documentElement.classList.contains('dark');
        
        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'default',
          themeVariables: isDark ? {
            primaryColor: '#3b82f6',
            primaryTextColor: '#f8fafc',
            primaryBorderColor: '#60a5fa',
            lineColor: '#94a3b8',
            secondaryColor: '#1e293b',
            tertiaryColor: '#0f172a',
            background: '#0f172a',
            mainBkg: '#1e293b',
            nodeBorder: '#3b82f6',
            clusterBkg: '#1e293b',
            titleColor: '#f8fafc',
            edgeLabelBackground: '#1e293b'
          } : {
            primaryColor: '#1e40af',
            primaryTextColor: '#1e293b',
            primaryBorderColor: '#3b82f6',
            lineColor: '#64748b',
            secondaryColor: '#e2e8f0',
            tertiaryColor: '#f1f5f9',
            background: '#ffffff',
            mainBkg: '#f8fafc',
            nodeBorder: '#1e40af'
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
            padding: 15
          },
          journey: {
            diagramMarginX: 50,
            diagramMarginY: 10
          },
          securityLevel: 'loose'
        });

        // Generate unique ID for this diagram
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(id, code);
        setSvg(renderedSvg);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(err instanceof Error ? err.message : 'Failed to render diagram');
      } finally {
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [code]);

  const badgeConfig = diagramTypeBadges[diagramType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded && "fixed inset-4 z-50 m-0"
      )}>
        {(title || description) && (
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className={cn("text-xs", badgeConfig.color)}>
                    {badgeConfig.label}
                  </Badge>
                  {title && (
                    <CardTitle className="text-lg font-semibold">
                      {title}
                    </CardTitle>
                  )}
                </div>
                {description && (
                  <p className="text-sm text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className="shrink-0"
                aria-label={isExpanded ? 'Minimize diagram' : 'Expand diagram'}
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </Button>
            </div>
          </CardHeader>
        )}

        <CardContent className={cn(
          "relative",
          isExpanded ? "h-[calc(100%-80px)] overflow-auto" : "max-h-[500px] overflow-auto"
        )}>
          {isLoading && (
            <div className="space-y-4 p-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-8 w-1/2" />
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <AlertCircle className="w-10 h-10 text-destructive mb-4" />
              <h4 className="font-semibold text-destructive mb-2">Failed to Render Diagram</h4>
              <p className="text-sm text-muted-foreground mb-4">{error}</p>
              <details className="w-full max-w-lg">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  View Raw Code
                </summary>
                <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-x-auto text-left">
                  {code}
                </pre>
              </details>
            </div>
          )}

          {!isLoading && !error && svg && (
            <div 
              ref={containerRef}
              className="mermaid-container flex justify-center items-center p-4"
              dangerouslySetInnerHTML={{ __html: svg }}
              aria-label={title || 'Mermaid diagram'}
            />
          )}
        </CardContent>
      </Card>

      {/* Backdrop for expanded mode */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </motion.div>
  );
};
