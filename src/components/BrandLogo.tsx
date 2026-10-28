import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  }[size];

  const titleSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* TinkerHub logo emblem */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#171717] to-[#0d0d0d] border border-[rgba(255,45,45,0.25)] shadow-[0_0_15px_rgba(255,45,45,0.15)] ${iconDimensions}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
          aria-hidden="true"
        >
          {/* TinkerHub logo: stacked rounded blocks */}
          <defs>
            <linearGradient id="th-gradient" x1="5" y1="5" x2="19" y2="19" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4D4D" />
              <stop offset="1" stopColor="#D93636" />
            </linearGradient>
          </defs>
          <g fill="url(#th-gradient)">
            <rect x="5" y="5" width="8.7" height="4" rx="2" />
            <rect x="15.1" y="5" width="3.9" height="4" rx="1.4" />
            <rect x="5" y="10" width="14" height="4" rx="2" />
            <rect x="5" y="15" width="5.3" height="4" rx="2" />
            <rect x="11.9" y="15" width="2.4" height="4" rx="1.2" />
            <rect x="15.9" y="15" width="3.1" height="4" rx="1.5" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-tight text-white font-sans ${titleSize}`}>
            Event<span className="text-[#FF2D2D]">Verse</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-medium tracking-wide text-[#A3A3A3] uppercase">
            Powered by TinkerHub SBCE
          </span>
        )}
      </div>
    </div>
  );
};
