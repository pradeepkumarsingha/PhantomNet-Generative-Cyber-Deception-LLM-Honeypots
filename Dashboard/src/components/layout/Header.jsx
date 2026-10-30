import React, { useState, useEffect } from 'react';
import { useSOC } from '../../context/SOCContext';
import {
  ShieldAlert,
  Radio,
  Search,
  Bell,
  PlusCircle,
  Play,
  Pause,
  Server,
  Database,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import Badge from '../common/Badge';

export const Header = ({ onOpenDeployModal, activeTab }) => {
  const {
    isLiveSimulating,
    setIsLiveSimulating,
    searchQuery,
    setSearchQuery,
    alerts,
    honeypots,
    sessions,
    addToast
  } = useSOC();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const activeAlertsCount = alerts.filter(a => a.status === 'active').length;
  const criticalCount = alerts.filter(a => a.severity === 'critical' && a.status === 'active').length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyber-border bg-cyber-bg/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Brand & System Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-neon/10 border border-cyber-cyan/40 shadow-glow-cyan">
              <ShieldAlert className="w-5 h-5 text-cyber-cyan" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-neon"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-base bg-gradient-to-r from-cyber-cyan via-white to-cyber-neon bg-clip-text text-transparent">
                  PHANTOMNET
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyber-surface border border-cyber-border text-cyber-cyan">
                  v2.4-PROD
                </span>
              </div>
              <p className="text-[11px] text-cyber-muted font-mono tracking-tight flex items-center gap-1.5">
                <span>GENERATIVE CYBER-DECEPTION SOC</span>
                <span className="text-cyber-border">|</span>
                <span className="text-emerald-400 font-medium">SANDBOXED</span>
              </p>
            </div>
          </div>

          {/* Engine Pill Status Indicators (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-cyber-border/70">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyber-surface/80 border border-cyber-border text-[11px] font-mono text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-cyber-neon" />
              <span className="text-cyber-muted">LLM:</span>
              <span className="text-cyber-neon font-semibold">llama3</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon animate-pulse"></span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyber-surface/80 border border-cyber-border text-[11px] font-mono text-slate-300">
              <Layers className="w-3.5 h-3.5 text-cyber-cyan" />
              <span className="text-cyber-muted">FUSE:</span>
              <span className="text-cyber-cyan font-semibold">VFS Active</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyber-surface/80 border border-cyber-border text-[11px] font-mono text-slate-300">
              <Database className="w-3.5 h-3.5 text-cyber-purple" />
              <span className="text-cyber-muted">ChromaDB:</span>
              <span className="text-cyber-purple font-semibold">5 Vectors</span>
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-muted" />
            <input
              type="text"
              id="global-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search decoy files, IPs, canaries, commands, alerts..."
              className="w-full pl-9 pr-4 py-1.5 text-xs font-mono rounded-lg bg-cyber-surface border border-cyber-border text-cyber-text placeholder-cyber-muted/70 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-cyber-muted hover:text-cyber-text bg-cyber-card px-1.5 py-0.5 rounded border border-cyber-border"
              >
                ESC
              </button>
            )}
          </div>
        </div>

        {/* Right Actions & Clock */}
        <div className="flex items-center gap-3">
          {/* Live Simulator Toggle */}
          <button
            onClick={() => {
              setIsLiveSimulating(!isLiveSimulating);
              addToast(
                isLiveSimulating ? "Simulation Paused" : "Live Simulation Active",
                isLiveSimulating ? "Background attacker telemetry is now paused" : "Background attack traffic generator resumed",
                isLiveSimulating ? "warning" : "success"
              );
            }}
            id="simulation-toggle-btn"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all ${
              isLiveSimulating
                ? 'bg-cyber-neon/10 border-cyber-neon/40 text-cyber-neon shadow-[0_0_12px_rgba(0,255,157,0.15)]'
                : 'bg-cyber-surface border-cyber-border text-cyber-muted hover:text-slate-200'
            }`}
            title="Toggle background simulated attack commands"
          >
            {isLiveSimulating ? (
              <>
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyber-neon" />
                <span className="hidden sm:inline">SIMULATION LIVE</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-cyber-amber" />
                <span className="hidden sm:inline">SIM PAUSED</span>
              </>
            )}
          </button>

          {/* Quick Deploy Node Button */}
          <button
            onClick={onOpenDeployModal}
            id="quick-deploy-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyber-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs tracking-wide shadow-glow-cyan hover:shadow-cyan-400/40 transition-all duration-200"
          >
            <PlusCircle className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">Deploy Node</span>
          </button>

          {/* Alert Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              id="notifications-bell-btn"
              className="relative p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-300 hover:text-white hover:border-cyber-border-light transition-all"
            >
              <Bell className="w-4 h-4" />
              {activeAlertsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyber-red text-[10px] font-bold text-white shadow-glow-red">
                  {activeAlertsCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 md:w-96 rounded-xl bg-cyber-card border border-cyber-border shadow-2xl z-50 p-3 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyber-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">Security Alerts</span>
                    <Badge variant="critical" size="xs">{criticalCount} Critical</Badge>
                  </div>
                  <span className="text-[11px] font-mono text-cyber-muted">{activeAlertsCount} active</span>
                </div>
                <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
                  {alerts.slice(0, 5).map(alert => (
                    <div
                      key={alert.id}
                      className="p-2.5 rounded-lg bg-cyber-surface/60 border border-cyber-border/80 hover:border-cyber-cyan/30 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant={alert.severity} size="xs">{alert.severity.toUpperCase()}</Badge>
                        <span className="text-[10px] font-mono text-cyber-muted">{alert.timestamp}</span>
                      </div>
                      <p className="text-xs font-medium text-slate-200 line-clamp-1">{alert.title}</p>
                      <p className="text-[11px] font-mono text-cyber-muted line-clamp-2 mt-0.5">{alert.details}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-full mt-2.5 py-1.5 text-center text-xs font-mono text-cyber-cyan hover:underline bg-cyber-surface/40 rounded border border-cyber-border"
                >
                  Close Notification Feed
                </button>
              </div>
            )}
          </div>

          {/* UTC Clock */}
          <div className="hidden lg:flex flex-col items-end pl-2 font-mono text-right">
            <span className="text-xs font-semibold text-slate-200">
              {currentTime.toUTCString().slice(17, 25)} <span className="text-cyber-cyan text-[10px]">UTC</span>
            </span>
            <span className="text-[10px] text-cyber-muted">
              {currentTime.toISOString().slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
