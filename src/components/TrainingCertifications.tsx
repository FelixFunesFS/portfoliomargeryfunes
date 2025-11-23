import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';
import googleLogo from '@/assets/brands/google-logo.png';
import ibmLogo from '@/assets/brands/ibm-logo.png';

interface Certification {
  name: string;
  organization: string;
  description?: string;
  scope?: string;
  category?: string;
  isPrimary?: boolean;
}

const certifications: Certification[] = [
  {
    name: "Google UX Design",
    organization: "Google",
    description: "Comprehensive UX design process including user research, wireframing, prototyping, and usability testing",
    scope: "7-course specialization covering end-to-end UX workflow",
    isPrimary: true,
  },
  {
    name: "Google UX Research & Test Early Designs",
    organization: "Google",
    description: "Advanced research methodologies, usability studies, and iterative design validation techniques",
    scope: "Deep dive into qualitative research, synthesis, and testing protocols",
    isPrimary: true,
  },
  {
    name: "IBM Full Stack Software Developer",
    organization: "IBM",
    category: "Full Stack Development",
    scope: "Front-end, back-end, databases, deployment",
  },
  {
    name: "IBM AI Developer",
    organization: "IBM",
    category: "AI & Automation",
    scope: "Machine learning, AI integration, model deployment",
  },
  {
    name: "Generative AI for Software Developers",
    organization: "Google",
    category: "AI & Automation",
    scope: "Prompt engineering, AI-assisted development",
  },
  {
    name: "Google Prompting Essentials",
    organization: "Google",
    category: "AI & Automation",
    scope: "Advanced prompt design and AI interaction",
  },
  {
    name: "IBM DevOps, Cloud and Agile Foundations",
    organization: "IBM",
    category: "DevOps & Agile",
    scope: "CI/CD, cloud infrastructure, agile methodologies",
  },
  {
    name: "Agile Development & Scrum",
    organization: "Various",
    category: "DevOps & Agile",
    scope: "Scrum framework, sprint planning, team collaboration",
  },
  {
    name: "Cloud Application Development Foundations",
    organization: "IBM",
    category: "Cloud Development",
    scope: "Cloud-native architecture, microservices, scalability",
  },
];

const primaryCertifications = certifications.filter(cert => cert.isPrimary);
const supportingCertifications = certifications.filter(cert => !cert.isPrimary);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const getCategoryColor = (category?: string) => {
  switch (category) {
    case "Full Stack Development":
    case "Cloud Development":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "AI & Automation":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    case "DevOps & Agile":
      return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
    default:
      return "bg-accent/10 text-accent-foreground border-accent/20";
  }
};

const getOrganizationLogo = (organization: string) => {
  switch (organization) {
    case "Google":
      return googleLogo;
    case "IBM":
      return ibmLogo;
    default:
      return null;
  }
};

export const TrainingCertifications = () => {
  return (
    <section className="container-custom py-12 sm:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            Continuous Learning
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            <span className="text-primary">Training</span> & <span className="text-success">Professional Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Formal education backing research expertise and technical implementation capabilities
          </p>
        </motion.div>

        {/* Primary UX Credentials */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Primary Expertise
            </Badge>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {primaryCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      {getOrganizationLogo(cert.organization) ? (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-card border border-primary/20 flex items-center justify-center p-1.5">
                          <img
                            src={getOrganizationLogo(cert.organization)!}
                            alt={cert.organization}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          {cert.organization}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    <p className="text-xs text-muted-foreground/80 italic">
                      {cert.scope}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Supporting Technical Credentials */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
              Supporting Capabilities
            </Badge>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {supportingCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-accent" />
                      {getOrganizationLogo(cert.organization) ? (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-card border border-accent/20 flex items-center justify-center p-1">
                          <img
                            src={getOrganizationLogo(cert.organization)!}
                            alt={cert.organization}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          {cert.organization}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base sm:text-lg leading-snug">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge className={`text-xs ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      {cert.scope}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
