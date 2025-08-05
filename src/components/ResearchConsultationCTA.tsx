import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageCircle, Download, Phone } from 'lucide-react';

const ResearchConsultationCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-8 text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Ready to Collaborate?
          </Badge>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Let's Discuss Your UX Research Needs
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need user research strategy, usability testing, or systematic problem-solving, 
            I'd love to explore how research can drive your project's success.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule 30-min Research Call
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Download className="mr-2 w-5 h-5" />
              Download UX Research Portfolio
            </Button>
            
            <Button variant="outline" size="lg">
              <MessageCircle className="mr-2 w-5 h-5" />
              Quick Message
            </Button>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>Available for research projects, consultation, and collaboration</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResearchConsultationCTA;