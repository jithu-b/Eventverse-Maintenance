import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, Sparkles, RefreshCw, Cpu, Zap } from 'lucide-react';

interface Spark {
  id: number;
  x: number;
  y: number;
  text: string;
}

export const FunMaintenanceAnimation: React.FC = () => {
  const [tinkerCount, setTinkerCount] = useState(0);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isWrenchActive, setIsWrenchActive] = useState(false);

  const funPhrases = [
    '🔧 Machu Under Work!',
    '⚡ Charging servers!',
    '🚀 Boosting speed!',
    '✨ Polishing pixels!',
    '🛠️ TinkerHub magic!',
    '📡 Tuning signals!',
  ];

  const handleInteract = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsWrenchActive(true);
    setTimeout(() => setIsWrenchActive(false), 400);

    setTinkerCount((prev) => prev + 1);

    // Calculate position relative to container or random offset
    const randomOffset = (Math.random() - 0.5) * 80;
    const newSpark: Spark = {
      id: Date.now() + Math.random(),
      x: randomOffset,
      y: -30 - Math.random() * 40,
      text: funPhrases[tinkerCount % funPhrases.length],
    };

    setSparks((prev) => [...prev.slice(-4), newSpark]);

    // Clean up spark after animation
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
    }, 1200);
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none my-2 sm:my-4">
      {/* Pop-up float container */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 14, stiffness: 120 }}
        className="relative cursor-pointer touch-manipulation group"
        onClick={handleInteract}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow backdrop behind the core */}
        <div className="absolute inset-0 -m-6 sm:-m-10 bg-[#FF2D2D]/20 rounded-full blur-2xl group-hover:bg-[#FF2D2D]/35 transition-all duration-500 pointer-events-none" />

        {/* Outer Orbital Ring 1 (Rotating Clockwise) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-68 md:h-68 rounded-full border border-dashed border-[#FF2D2D]/40 flex items-center justify-center p-3 relative"
        >
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FF2D2D] shadow-[0_0_12px_#FF2D2D]" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]" />
        </motion.div>

        {/* Outer Orbital Ring 2 (Rotating Counter-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-4 sm:inset-5 rounded-full border border-[rgba(255,45,45,0.25)] flex items-center justify-center pointer-events-none"
        >
          {/* Orbiting Satellite Node 2 */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF2D2D] shadow-[0_0_8px_#FF2D2D]" />
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF2D2D] shadow-[0_0_8px_#FF2D2D]" />
        </motion.div>

        {/* Center Futuristic Tech Sphere / Hub */}
        <div className="absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-[#080808] border-2 border-[rgba(255,45,45,0.5)] shadow-[0_0_30px_rgba(255,45,45,0.3)] flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle grid pattern in sphere */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(#FF2D2D 1px, transparent 1px)',
              backgroundSize: '10px 10px',
            }}
          />

          {/* Animated Tinker Icon & Mascot Element */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              animate={
                isWrenchActive
                  ? { rotate: [0, -25, 25, -15, 0], scale: [1, 1.25, 1] }
                  : { y: [0, -4, 0] }
              }
              transition={
                isWrenchActive
                  ? { duration: 0.4 }
                  : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
              }
              className="relative p-3 rounded-2xl bg-[#FF2D2D]/15 border border-[#FF2D2D]/40 text-[#FF2D2D] shadow-[0_0_15px_rgba(255,45,45,0.35)]"
            >
              <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF2D2D]" />
              
              {/* Little Zap indicator */}
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-1.5 -right-1.5 bg-[#FF2D2D] text-white p-0.5 rounded-full shadow-[0_0_8px_#FF2D2D]"
              >
                <Zap className="w-3 h-3 fill-current" />
              </motion.div>
            </motion.div>

            {/* Micro status pulse */}
            <span className="mt-2 text-[10px] font-mono tracking-wider uppercase text-white/80 font-bold bg-[#FF2D2D]/20 px-2 py-0.5 rounded-full border border-[#FF2D2D]/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D] animate-ping" />
              TINKERING
            </span>
          </div>
        </div>

        {/* Floating Sparks on Click / Tap */}
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ opacity: 0, y: 0, scale: 0.5, x: spark.x }}
              animate={{ opacity: 1, y: spark.y, scale: 1 }}
              exit={{ opacity: 0, y: spark.y - 30, scale: 0.8 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 whitespace-nowrap px-3 py-1 bg-[#171717] border border-[#FF2D2D] text-[#FF2D2D] text-xs font-bold rounded-full shadow-[0_0_15px_rgba(255,45,45,0.4)]"
            >
              {spark.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Playful hint beneath animation for mobile and laptop */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-[11px] sm:text-xs text-[#A3A3A3] flex items-center gap-1.5"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#FF2D2D]" />
        <span>{tinkerCount === 0 ? 'Tap or click the orb to boost maintenance!' : `Tinkered ${tinkerCount} time${tinkerCount === 1 ? '' : 's'}! Keep it going! 🚀`}</span>
      </motion.p>
    </div>
  );
};
