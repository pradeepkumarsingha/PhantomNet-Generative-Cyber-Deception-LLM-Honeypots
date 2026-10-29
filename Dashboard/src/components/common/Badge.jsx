import React from 'react';

export const Badge = ({ children, variant = 'default', size = 'sm', pulse = false, className = '' }) => {
  const baseClasses = "inline-flex items-center gap-1.5 font-medium rounded-full transition-all";
  
  const sizeClasses = {
    xs: "px-2 py-0.5 text-[11px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variantClasses = {
    critical: "bg-cyber-red/15 text-cyber-red border border-cyber-red/30 shadow-[0_0_10px_rgba(255,51,102,0.2)]",
    high: "bg-cyber-amber/15 text-cyber-amber border border-cyber-amber/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
    medium: "bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]",
    low: "bg-cyber-neon/15 text-cyber-neon border border-cyber-neon/30 shadow-[0_0_10px_rgba(0,255,157,0.2)]",
    purple: "bg-cyber-purple/15 text-cyber-purple border border-cyber-purple/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    active: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    blocked: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
    resolved: "bg-slate-500/15 text-slate-400 border border-slate-500/30",
    armed: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    tripped: "bg-red-500/15 text-red-400 border border-red-500/30 animate-pulse",
    default: "bg-slate-800 text-slate-300 border border-slate-700",
    neon: "bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/40 shadow-glow-neon",
    cyan: "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/40 shadow-glow-cyan",
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size] || sizeClasses.sm} ${variantClasses[variant] || variantClasses.default} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
