import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo.tsx';
import { FunMaintenanceAnimation } from './FunMaintenanceAnimation.tsx';
import { RotateCw, CheckCircle2 } from 'lucide-react';

interface MaintenanceScreenProps {
  onTogglePreviewMode?: () => void;
  isPreviewMode?: boolean;
}

export const MaintenanceScreen: React.FC<MaintenanceScreenProps> = ({
  onTogglePreviewMode,
  isPreviewMode = false,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkMessage, setCheckMessage] = useState<string | null>(null);

  const handleCheckAgain = () => {
    setIsChecking(true);
    setCheckMessage(null);

    setTimeout(() => {
      setIsChecking(false);
      setCheckMessage('Maintenance is still in progress. Our team is actively on it!');
    }, 1000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between selection:bg-[#FF2D2D]/30 selection:text-white overflow-hidden px-4 sm:px-6">
      {/* Background ambient lighting and subtle red gradients */}
      <div 
        className="pointer-events-none absolute inset-0 bg-ambient-radial opacity-80" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] bg-[#FF2D2D] opacity-[0.08] blur-[120px] rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[400px] h-[250px] bg-[#B91C1C] opacity-[0.06] blur-[100px] rounded-full" 
        aria-hidden="true" 
      />

      {/* Subtle tech background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 45, 45, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 45, 45, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* ================= HEADER ================= */}
      <header className="relative z-10 w-full max-w-6xl mx-auto pt-6 pb-2 flex items-center justify-between">
        <BrandLogo size="md" showSubtitle={true} />

        {/* Small live badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[rgba(255,45,45,0.2)] text-xs text-[#A3A3A3]">
          <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-status-pulse" />
          <span className="text-white/90 font-medium">TinkerHub SBCE</span>
        </div>
      </header>

      {/* ================= CENTRAL CONTENT ================= */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center py-6 sm:py-10 max-w-3xl mx-auto w-full text-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[rgba(255,45,45,0.3)] shadow-[0_0_15px_rgba(255,45,45,0.15)] mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-status-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FF2D2D] uppercase">
            SYSTEM MAINTENANCE
          </span>
        </motion.div>

        {/* Main Punchy Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 uppercase"
        >
          WE'LL BE <span className="bg-gradient-to-r from-[#FF2D2D] via-[#FF6666] to-[#B91C1C] bg-clip-text text-transparent">BACK SOON.</span>
        </motion.h1>

        {/* Short, crisp single description without clutter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-[#A3A3A3] max-w-lg mx-auto mb-4 font-normal"
        >
          We're performing essential upgrades to make EventVerse even better.
        </motion.p>

        {/* THE FUN ANIMATION (Optimized for both Phone & Laptop) */}
        <FunMaintenanceAnimation />

        {/* Simple interactive status action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <button
            onClick={handleCheckAgain}
            disabled={isChecking}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] hover:bg-[#222222] text-white text-xs sm:text-sm font-semibold border border-[rgba(255,45,45,0.3)] hover:border-[#FF2D2D] shadow-[0_0_20px_rgba(255,45,45,0.12)] hover:shadow-[0_0_25px_rgba(255,45,45,0.25)] transition-all active:scale-[0.97] cursor-pointer"
          >
            <RotateCw className={`w-3.5 h-3.5 text-[#FF2D2D] transition-transform ${isChecking ? 'animate-spin' : 'group-hover:rotate-45'}`} />
            <span>{isChecking ? 'Checking System...' : 'Check Again'}</span>
          </button>

          {/* Quick status toast */}
          <AnimatePresence>
            {checkMessage && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs text-[#A3A3A3] bg-[#141414] border border-[rgba(255,45,45,0.25)] px-3.5 py-1.5 rounded-lg max-w-xs shadow-lg"
              >
                <span className="text-[#FF2D2D] font-medium mr-1.5">●</span>
                {checkMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto py-5 border-t border-[rgba(255,45,45,0.12)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A3A3A3]">
        <div className="flex items-center gap-2">
          <span>© 2026 EventVerse · TinkerHub SBCE</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white/70">Thank you for your patience</span>
          {onTogglePreviewMode && (
            <button
              onClick={onTogglePreviewMode}
              className="text-[#FF2D2D] hover:underline cursor-pointer"
            >
              {isPreviewMode ? 'View Maintenance' : 'Toggle Live View'}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
