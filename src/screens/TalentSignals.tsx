import { Activity, Sparkles, TrendingUp, Radio, ArrowUpRight } from 'lucide-react';

interface TalentSignalsProps {
  onNavigate: (screen: string) => void;
}

const signals = [
  { name: 'Maya Chen', role: 'Sr. Product Designer', signal: 'Portfolio updated - 3 new case studies added', time: '2h ago', score: 94, type: 'positive' },
  { name: 'Eli Torres', role: 'Motion Designer', signal: 'Completed AI interview - high narrative score', time: '4h ago', score: 88, type: 'positive' },
  { name: 'Priya Nair', role: 'Creative Strategist', signal: 'Team review scheduled for next Tuesday', time: '6h ago', score: 91, type: 'neutral' },
  { name: 'Sam Okafor', role: 'Visual Designer', signal: 'No response to portfolio follow-up (3 days)', time: '1d ago', score: 79, type: 'warning' },
  { name: 'Lena Moller', role: 'UX Researcher', signal: 'Strong systems thinking detected in case study', time: '1d ago', score: 85, type: 'positive' },
];

const weeklyData = [42, 38, 55, 61, 48, 72, 68];

export default function TalentSignals({ onNavigate }: TalentSignalsProps) {
  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <div>
          <h1 className="text-base font-semibold text-arc-text">Talent Signals</h1>
          <p className="text-xs text-arc-faint mt-0.5">Real-time candidate intelligence feed</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-arc-faint">Live</span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Signal metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Active Signals', value: '47', icon: Radio, color: '#3b82f6' },
            { label: 'This Week', value: '+12', icon: TrendingUp, color: '#10b981' },
            { label: 'High Priority', value: '8', icon: Activity, color: '#f43f5e' },
            { label: 'AI Verified', value: '94%', icon: Sparkles, color: '#06b6d4' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="arc-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon size={13} style={{ color }} />
                <span className="metric-label">{label}</span>
              </div>
              <div className="text-2xl font-semibold text-arc-text">{value}</div>
            </div>
          ))}
        </div>

        {/* Weekly chart */}
        <div className="arc-card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity size={13} className="text-arc-faint" />
            <h3 className="text-sm font-semibold text-arc-text">Signal Volume - Last 7 Days</h3>
          </div>
          <div className="flex items-end gap-2 h-20">
            {weeklyData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-sm" style={{
                  height: `${val * 0.95}px`,
                  background: i === weeklyData.length - 2
                    ? 'linear-gradient(to top, #3b82f6, #06b6d4)'
                    : 'linear-gradient(to top, rgba(59,130,246,0.4), rgba(6,182,212,0.15))',
                }} />
                <span className="text-[9px] text-arc-faint">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Signal feed */}
        <div className="arc-card overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-arc-border">
            <h3 className="text-sm font-semibold text-arc-text">Live Signal Feed</h3>
            <button className="text-xs text-arc-blue flex items-center gap-1"><ArrowUpRight size={11} /> View All</button>
          </div>
          <div className="divide-y divide-arc-border">
            {signals.map(({ name, role, signal, time, score, type }) => (
              <div key={name} className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => onNavigate('candidate')}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-arc-blue to-arc-cyan flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
                  {name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-medium text-arc-text">{name}</span>
                    <span className="text-[10px] text-arc-faint">{role}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${type === 'positive' ? 'bg-emerald-400' : type === 'warning' ? 'bg-amber-400' : 'bg-arc-faint'}`} />
                    <span className="text-xs text-arc-faint truncate">{signal}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-bold text-arc-blue">{score}</span>
                  <span className="text-[10px] text-arc-faint">{time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
