import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { SystemWorkflowSection } from './SystemWorkflowSection';

interface LandingPageProps {
  onEnterWorkspace: () => void;
  onViewDemo: () => void;
  workflowRef?: React.RefObject<HTMLDivElement | null>;
}


export const LandingPage: React.FC<LandingPageProps> = ({ onEnterWorkspace, onViewDemo, workflowRef }) => {

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-between relative text-sat-text selection:bg-sat-accent/20 transition-colors duration-200 overflow-x-hidden">

      {/* === GIF Background Layer (covers LiveSpaceBackground, behind landing UI) === */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <img
          src="/giphy-13.gif"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover select-none"
          style={{ opacity: 0.55 }}
        />
        {/* Dark overlay for contrast & readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* GIS Grid Patterns */}
      <div className="absolute inset-0 bg-gis-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gis-cross opacity-10 pointer-events-none z-0" />

      {/* Hero Section Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 w-full flex items-center justify-center z-10 flex-grow">
        

        {/* Hero Writing Layout */}
        <div className="flex flex-col justify-center items-center text-center space-y-6 bg-sat-surface/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-sat-border/50 shadow-2xl max-w-2xl w-full">
          
          {/* Main Display Headline (Serif + Bold Emphasis matching reference image) */}
          <div className="space-y-3">
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-sat-text leading-[1.05]">
              Intelligence for <br />
              our <span className="font-bold text-sat-text italic">Earth.</span>
            </h1>

            {/* Subtitle Label (Matching "DESIGN STUDIO" in user image) */}
            <div className="font-mono text-xs tracking-[0.25em] text-sat-accent uppercase pt-1 font-bold">
              SATQUERY PLATFORM
            </div>
          </div>

          {/* Editorial Paragraph (Matching narrative text in user reference image) */}
          <p className="text-sat-text/90 text-base sm:text-lg max-w-md font-sans font-medium leading-relaxed">
            Our AI analysis agents turn satellite imagery into inspectable, evidence-backed answers. Built for bi-temporal change detection, optical-SAR groundings, and clear scientific summaries.
          </p>

          {/* Action CTAs (Matching rounded pill button "read more" in user reference image) */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            
            {/* Pill Outlined Secondary Button */}
            <button
              onClick={onViewDemo}
              className="px-8 py-3 rounded-full border border-sat-borderLight text-sat-text font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 hover:border-sat-accent hover:text-sat-accent transition-all cursor-pointer bg-sat-surface/40 hover:bg-sat-surface shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>read demo</span>
            </button>

            {/* Pill Primary CTA Button */}
            <button
              onClick={onEnterWorkspace}
              className="px-8 py-3 rounded-full bg-sat-text text-sat-bg font-mono font-bold text-xs tracking-wider flex items-center justify-center space-x-2.5 hover:opacity-90 transition-all shadow-lg group uppercase cursor-pointer"
            >
              <span>ENTER WORKSPACE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>
          </div>

          {/* System Pipeline Readiness Indicator */}
          <div className="pt-4 font-mono text-[11px] text-sat-dim flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-sat-stable animate-ping" />
            <span>ORCHESTRATOR STATUS:</span>
            <span className="text-sat-stable font-bold">READY ●</span>
          </div>

        </div>

      </main>

      {/* System Workflow Pipeline & Telemetry Status Bar Section */}
      <div ref={workflowRef}>
        <SystemWorkflowSection onSelectStage={() => onEnterWorkspace()} />
      </div>

    </div>
  );
};
