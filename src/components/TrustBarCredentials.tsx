import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TestTube, MapPin, BarChart3 } from 'lucide-react';

const TrustBarCredentials = () => {
  const researchMethods = [
    {
      name: "User Interviews",
      description: "In-depth conversations to understand user motivations, pain points, and mental models",
      icon: Users,
      count: "50+ conducted",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      name: "Usability Testing",
      description: "Observing real users interact with systems to identify friction points",
      icon: TestTube,
      count: "200+ sessions",
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      name: "Journey Mapping",
      description: "Visualizing end-to-end user experiences to identify optimization opportunities",
      icon: MapPin,
      count: "25+ journeys",
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      name: "Data Analysis",
      description: "Quantitative analysis to validate insights and measure impact",
      icon: BarChart3,
      count: "Multi-year datasets",
      color: "bg-muted/50 text-muted-foreground border-muted"
    }
  ];

  return (
    <section 
      className="py-12 sm:py-16 bg-gradient-to-br from-background via-muted/20 to-background"
      aria-label="Research credentials and methodology"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
            Research Credentials
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Proven Research Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchMethods.map((method, index) => (
            <motion.article
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full border hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${method.color.split(' ')[0]}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 rounded-lg ${method.color} flex items-center justify-center mx-auto mb-3 border`}>
                    <method.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold mb-2">
                    {method.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm font-semibold">
                    {method.count}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarCredentials;
