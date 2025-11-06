import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageCircle, Download, Phone } from 'lucide-react';
const ResearchConsultationCTA = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }} className="mt-16">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        
      </Card>
    </motion.div>;
};
export default ResearchConsultationCTA;