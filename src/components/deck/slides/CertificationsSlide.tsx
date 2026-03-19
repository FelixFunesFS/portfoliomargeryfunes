import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import googleLogo from '@/assets/brands/google-logo.png';
import ibmLogo from '@/assets/brands/ibm-logo.png';
import { GraduationCap } from 'lucide-react';

const certs = [
  { name: 'Google UX Design', org: 'Google', logo: googleLogo, primary: true },
  { name: 'Google UX Research & Test Early Designs', org: 'Google', logo: googleLogo, primary: true },
  { name: 'IBM Full Stack Software Developer', org: 'IBM', logo: ibmLogo, primary: false },
  { name: 'IBM AI Developer', org: 'IBM', logo: ibmLogo, primary: false },
  { name: 'Generative AI for Software Developers', org: 'Google', logo: googleLogo, primary: false },
  { name: 'IBM DevOps, Cloud and Agile Foundations', org: 'IBM', logo: ibmLogo, primary: false },
];

const career = [
  { role: 'Aircraft Systems Specialist', years: '2016–2018', org: 'US Air Force' },
  { role: 'Senior Systems Analyst', years: '2018–2021', org: 'DOD/Boeing Contract' },
  { role: 'UX Designer & Automation Lead', years: '2021–2023', org: 'Military Systems' },
  { role: 'UX/UI Designer', years: '2023–Present', org: 'Freelance/Contract' },
];

export default function CertificationsSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[hsl(190,75%,45%)] text-[20px] font-medium tracking-[0.15em] uppercase mb-4">Credentials</p>
          <h2 className="text-[52px] font-bold mb-12">
            <span className="text-white">Certifications </span>
            <span className="text-[hsl(215,85%,55%)]">& Career</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <h3 className="text-[22px] font-semibold text-[hsl(215,85%,55%)] mb-6">Professional Certifications</h3>
            <div className="space-y-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${c.primary ? 'border-[hsl(215,85%,55%)]/30 bg-[hsl(215,85%,55%)]/10' : 'border-white/10 bg-white/5'}`}
                >
                  <img src={c.logo} alt={c.org} className="w-8 h-8 object-contain" />
                  <span className="text-[17px] text-white/90">{c.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div>
            <h3 className="text-[22px] font-semibold text-[hsl(25,90%,55%)] mb-6">Career Progression</h3>
            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(215,85%,55%)] via-[hsl(25,90%,55%)] to-[hsl(140,50%,55%)]" />
              <div className="space-y-6">
                {career.map((c, i) => (
                  <motion.div
                    key={c.role}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="relative"
                  >
                    <div className="absolute -left-[22px] top-2 w-3 h-3 rounded-full bg-[hsl(215,85%,55%)] border-2 border-[hsl(217,91%,4%)]" />
                    <h4 className="text-[18px] font-semibold text-white">{c.role}</h4>
                    <p className="text-[15px] text-white/50">{c.years} · {c.org}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
