import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, ExternalLink, X } from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudies';
import { useNavigate } from 'react-router-dom';
import missionGridBg from '@/assets/research-hub/mission-grid-bg.jpg';

const MissionDossierGrid = () => {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const navigate = useNavigate();

  const missions = caseStudiesData.slice(0, 6).map((study, index) => ({
    id: study.id,
    title: study.title,
    classification: index < 3 ? 'ACTIVE' : 'COMPLETED',
    status: index < 3 ? 'green' : 'blue',
    problem: study.problem.slice(0, 150) + '...',
    keyOutcome: study.keyOutcomes[0],
  }));

  const handleViewFullStudy = (id: number) => {
    navigate('/case-studies', { state: { selectedStudyId: id } });
  };

  return (
    <div className="relative min-h-screen w-full py-20 overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${missionGridBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container-custom px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Mission Dossier</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic research operations with measurable impact
          </p>
        </motion.div>

        {/* Hexagonal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedMission(mission.id)}
              className="relative cursor-pointer group"
            >
              {/* Card */}
              <div 
                className="glass rounded-xl p-6 border-2 border-primary/30 hover:border-primary/60 transition-all h-full"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Hexagon className="w-5 h-5 text-primary" />
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      mission.status === 'green' 
                        ? 'bg-success/20 text-success border border-success/40' 
                        : 'bg-primary/20 text-primary border border-primary/40'
                    }`}>
                      {mission.classification}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">MISSION #{mission.id}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {mission.title}
                </h3>

                {/* Problem Summary */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {mission.problem}
                </p>

                {/* Key Outcome */}
                <div className="mt-auto pt-4 border-t border-border/30">
                  <p className="text-xs text-primary/80 mb-1">KEY OUTCOME</p>
                  <p className="text-sm font-medium text-foreground">{mission.keyOutcome}</p>
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(var(--primary), 0.3)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Detail Modal */}
      <AnimatePresence>
        {selectedMission !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMission(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-2xl w-full border border-primary/30"
              style={{
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Mission Briefing</h3>
                <button
                  onClick={() => setSelectedMission(null)}
                  className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground">
                  Full mission details available on the case studies page.
                </p>
              </div>

              <button
                onClick={() => handleViewFullStudy(selectedMission)}
                className="w-full px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-primary rounded-lg text-primary font-semibold transition-all flex items-center justify-center gap-2"
              >
                View Full Case Study <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MissionDossierGrid;
