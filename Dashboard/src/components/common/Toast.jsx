import React from 'react';
import { useSOC } from '../../context/SOCContext';
import { AlertTriangle, CheckCircle, Info, ShieldAlert, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useSOC();

  if (!toasts.length) return null;

  const iconMap = {
    success: <CheckCircle className="w-5 h-5 text-cyber-neon" />,
    warning: <AlertTriangle className="w-5 h-5 text-cyber-amber" />,
    critical: <ShieldAlert className="w-5 h-5 text-cyber-red" />,
    info: <Info className="w-5 h-5 text-cyber-cyan" />,
  };

  const borderMap = {
    success: "border-cyber-neon/40 shadow-glow-neon",
    warning: "border-cyber-amber/40",
    critical: "border-cyber-red/50 shadow-glow-red",
    info: "border-cyber-cyan/40 shadow-glow-cyan",
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-cyber-card/95 backdrop-blur-md border ${borderMap[toast.type] || borderMap.info} text-cyber-text transition-all duration-300 animate-slide-in`}
        >
          <div className="mt-0.5 shrink-0">
            {iconMap[toast.type] || iconMap.info}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold tracking-wide flex items-center justify-between">
              {toast.title}
            </h4>
            <p className="text-xs text-cyber-muted mt-0.5 leading-relaxed break-words font-mono">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-cyber-muted hover:text-cyber-text transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
