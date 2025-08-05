import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Eye } from 'lucide-react';

interface PortfolioDownloadProps {
  variant?: 'button' | 'link' | 'card';
  showPreview?: boolean;
  className?: string;
}

const PortfolioDownload: React.FC<PortfolioDownloadProps> = ({ 
  variant = 'button', 
  showPreview = false,
  className = '' 
}) => {
  const handleDownload = () => {
    // In a real implementation, this would trigger the actual PDF download
    // For now, we'll just log the action
    console.log('Downloading UX Research Portfolio...');
    
    // Example implementation:
    // const link = document.createElement('a');
    // link.href = '/path/to/portfolio.pdf';
    // link.download = 'UX-Research-Portfolio-[Your-Name].pdf';
    // link.click();
  };

  const handlePreview = () => {
    // Open portfolio preview in new tab
    console.log('Opening portfolio preview...');
    // window.open('/portfolio-preview', '_blank');
  };

  if (variant === 'button') {
    return (
      <div className={`flex gap-2 ${className}`}>
        <Button 
          onClick={handleDownload}
          variant="outline" 
          className="border-primary text-primary hover:bg-primary/10"
        >
          <Download className="mr-2 w-4 h-4" />
          Download Portfolio
        </Button>
        {showPreview && (
          <Button 
            onClick={handlePreview}
            variant="ghost"
            size="sm"
          >
            <Eye className="w-4 h-4" />
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'link') {
    return (
      <button
        onClick={handleDownload}
        className={`inline-flex items-center text-primary hover:text-primary/80 transition-colors ${className}`}
      >
        <FileText className="mr-1 w-4 h-4" />
        UX Research Portfolio (PDF)
      </button>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <Button 
        onClick={handleDownload}
        size="lg"
        className="bg-primary hover:bg-primary/90"
      >
        <Download className="mr-2 w-5 h-5" />
        Download Full UX Research Portfolio
      </Button>
      <p className="text-sm text-muted-foreground mt-2">
        Complete case studies, research methods, and outcomes
      </p>
    </div>
  );
};

export default PortfolioDownload;