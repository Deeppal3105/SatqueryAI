import React, { useState, useEffect } from 'react';

interface SystemWorkflowSectionProps {
  onSelectStage?: (stage: 1 | 2 | 3) => void;
}

export const SystemWorkflowSection: React.FC<SystemWorkflowSectionProps> = ({ onSelectStage }) => {
  const [utcTime, setUtcTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
      setUtcTime(timeStr);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black border-t border-white z-10 font-sans">

      {/* Workflow Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white pb-5 gap-4">
          <div>
            <span className="font-mono text-xs text-sat-accent tracking-widest uppercase block mb-1.5 font-bold">
              SYSTEM WORKFLOW
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              SCIENTIFIC REMOTE-SENSING ANALYSIS IN THREE STEPS
            </h2>
          </div>
          <p className="text-white text-xs sm:text-sm max-w-md font-mono">
            Automated AI-agent orchestration turning satellite imagery into auditable evidence.
          </p>
        </div>

        {/* 3 Fully Opaque Charcoal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* STAGE 01: OBSERVE */}
          <div
            onClick={() => onSelectStage?.(1)}
            className={`bg-[#1a1a1a] hover:bg-[#222222] p-7 rounded-2xl border border-white hover:border-sat-accent space-y-4 relative group transition-all duration-200 shadow-xl ${onSelectStage ? 'cursor-pointer' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-sat-accent font-bold tracking-widest uppercase">STAGE 01</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 border border-white text-white text-[10px] uppercase font-mono font-semibold tracking-wider">INPUTS</span>
            </div>
            <div className="w-full h-px bg-white" />
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">01. OBSERVE</h3>
            <p className="text-sm text-white leading-relaxed font-sans font-normal">
              Load high-resolution optical, SAR radar backscatter, or multispectral satellite observations into the workspace.
            </p>
            <div className="pt-1 font-mono text-[10px] text-white flex items-center space-x-1.5 border-t border-white">
              <span>SUPPORTED:</span>
              <span className="text-sat-accent font-bold">RGB • SAR • NDWI • NIR</span>
            </div>
          </div>

          {/* STAGE 02: ASK */}
          <div
            onClick={() => onSelectStage?.(2)}
            className={`bg-[#1a1a1a] hover:bg-[#222222] p-7 rounded-2xl border border-white hover:border-sat-change space-y-4 relative group transition-all duration-200 shadow-xl ${onSelectStage ? 'cursor-pointer' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-sat-change font-bold tracking-widest uppercase">STAGE 02</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 border border-white text-white text-[10px] uppercase font-mono font-semibold tracking-wider">NATURAL LANGUAGE</span>
            </div>
            <div className="w-full h-px bg-white" />
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">02. ASK</h3>
            <p className="text-sm text-white leading-relaxed font-sans font-normal">
              Ask questions in plain language (e.g., "What changed between these observations?" or "Identify water bodies").
            </p>
            <div className="pt-1 font-mono text-[10px] text-white flex items-center space-x-1.5 border-t border-white">
              <span>AGENT:</span>
              <span className="text-sat-change font-bold">Zero-Shot Model Selection</span>
            </div>
          </div>

          {/* STAGE 03: UNDERSTAND */}
          <div
            onClick={() => onSelectStage?.(3)}
            className={`bg-[#1a1a1a] hover:bg-[#222222] p-7 rounded-2xl border border-white hover:border-sat-stable space-y-4 relative group transition-all duration-200 shadow-xl ${onSelectStage ? 'cursor-pointer' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-sat-stable font-bold tracking-widest uppercase">STAGE 03</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 border border-white text-white text-[10px] uppercase font-mono font-semibold tracking-wider">EVIDENCE</span>
            </div>
            <div className="w-full h-px bg-white" />
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">03. UNDERSTAND</h3>
            <p className="text-sm text-white leading-relaxed font-sans font-normal">
              Receive inspectable GeoJSON bounding boxes, confidence metrics, and an auditable step-by-step pipeline execution replay.
            </p>
            <div className="pt-1 font-mono text-[10px] text-white flex items-center space-x-1.5 border-t border-white">
              <span>OUTPUT:</span>
              <span className="text-sat-stable font-bold">Auditable Analysis Summary</span>
            </div>
          </div>

        </div>
      </div>

      {/* Telemetry Status Bar Footer */}
      <footer className="border-t border-white bg-black py-3 px-4 sm:px-6 lg:px-8 font-mono text-[11px] text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3 flex-wrap justify-center sm:justify-start">
            <span className="text-white font-semibold">LAT: 39.5696° N</span>
            <span className="text-white">|</span>
            <span className="text-white font-semibold">LON: 2.6502° E</span>
            <span className="text-white">|</span>
            <span>ELEV: 540KM (LEO)</span>
            <span className="text-white">|</span>
            <span>ORBIT: SSO</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sat-accent font-bold">{utcTime || '15:30:16 UTC'}</span>
            <span className="text-white">|</span>
            <span className="text-sat-stable font-bold flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sat-stable animate-ping mr-1" />
              <span>NODE_01_ACTIVE</span>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};
