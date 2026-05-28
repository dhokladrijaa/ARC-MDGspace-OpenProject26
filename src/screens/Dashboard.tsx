import { Sparkles, TrendingUp, Users, Clock, ArrowUpRight, ChevronRight, Activity, Zap, Eye, Star } from 'lucide-react';

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

const candidates = [
  { name: 'Maya Chen', role: 'Sr. Product Designer', score: 94, stage: 'Portfolio Review', match: 'Exceptional', avatar: 'MC' },
  { name: 'Eli Torres', role: 'Motion Designer', score: 88, stage: 'AI Interview', match: 'High Potential', avatar: 'ET' },
  { name: 'Priya Nair', role: 'Creative Strategist', score: 91, stage: 'Team Review', match: 'Exceptional', avatar: 'PN' },
  { name: 'Sam Okafor', role: 'Visual Designer', score: 79, stage: 'Screening', match: 'Strong', avatar: 'SO' },
  { name: 'Lena Moller', role: 'UX Researcher', score: 85, stage: 'Portfolio Review', match: 'High Potential', avatar: 'LM' },
];

const insightCards = [
  {
    title: 'Systems Thinking Cluster',
    body: '7 candidates show exceptional systems thinking - top 8% of all applicants this quarter.',
    action: 'View Cluster',
    color: 'blue',
  },
  {
    title: 'Stage 2 Drop-off Detected',
    body: 'Portfolio submission drop-off increased 34% after stage 2. Evaluation criteria may need recalibration.',
    action: 'Investigate',
    color: 'amber',
  },
  {
    title: 'DNA Match Found',
    body: '3 candidates strongly match your top-performing designer\'s creative DNA profile.',
    action: 'Review Matches',
    color: 'emerald',
  },
];

const archetypes = [
  { label: 'Systems Thinker', count: 12, pct: 28, color: '#3b82f6' },
  { label: 'Narrative Craftsman', count: 9, pct: 21, color: '#06b6d4' },
  { label: 'Visual Purist', count: 8, pct: 19, color: '#10b981' },
  { label: 'Cultural Catalyst', count: 7, pct: 16, color: '#f59e0b' },
  { label: 'Research Driven', count: 6, pct: 14, color: '#f43f5e' },
];

function BubbleCluster({ onSelect }: { onSelect: () => void }) {
  const bubbles = [
    { cx: 200, cy: 180, r: 48, label: 'Maya C.', score: 94, color: '#3b82f6' },
    { cx: 320, cy: 140, r: 38, label: 'Priya N.', score: 91, color: '#10b981' },
    { cx: 130, cy: 280, r: 34, label: 'Eli T.', score: 88, color: '#f59e0b' },
    { cx: 380, cy: 250, r: 30, label: 'Lena M.', score: 85, color: '#06b6d4' },
    { cx: 260, cy: 310, r: 26, label: 'Sam O.', score: 79, color: '#f43f5e' },
    { cx: 450, cy: 160, r: 22, label: 'Aria S.', score: 77, color: '#3b82f6' },
    { cx: 80, cy: 180, r: 20, label: 'Chris W.', score: 74, color: '#8888a8' },
    { cx: 420, cy: 340, r: 18, label: 'Dev P.', score: 71, color: '#06b6d4' },
  ];

  return (
    <svg className="w-full h-full" viewBox="0 0 540 440" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {bubbles.map(b => (
          <radialGradient key={`grad-${b.label}`} id={`grad-${b.label.replace(/\s|\./g,'')}`} cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor={b.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={b.color} stopOpacity="0.15" />
          </radialGradient>
        ))}
      </defs>

      <text x="20" y="24" fill="rgba(59,130,246,0.5)" fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">TALENT INTELLIGENCE MAP</text>

      {bubbles.map(b => (
        <g key={b.label} className="cursor-pointer" onClick={onSelect}>
          <circle cx={b.cx} cy={b.cy} r={b.r + 6} fill="none" stroke={b.color} strokeWidth="0.5" strokeOpacity="0.3" />
          <circle
            cx={b.cx} cy={b.cy} r={b.r}
            fill={`url(#grad-${b.label.replace(/\s|\./g,'')})`}
            stroke={b.color} strokeWidth="0.8" strokeOpacity="0.5"
          />
          <text x={b.cx} y={b.cy - 3} textAnchor="middle" fill="rgba(232,232,240,0.9)" fontSize={Math.max(9, b.r * 0.28)} fontFamily="Inter, sans-serif" fontWeight="500">
            {b.label}
          </text>
          <text x={b.cx} y={b.cy + 13} textAnchor="middle" fill={b.color} fontSize={Math.max(8, b.r * 0.24)} fontFamily="Inter, sans-serif" fontWeight="600">
            {b.score}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      {/* Top bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <div>
          <h1 className="text-base font-semibold text-arc-text">Creative Talent Pulse</h1>
          <p className="text-xs text-arc-faint mt-0.5">Real-time hiring intelligence - Q1 2028</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-400">Live</span>
          </div>
          <button className="arc-btn-primary flex items-center gap-1.5 text-xs">
            <Zap size={12} />
            Run AI Analysis
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Active Candidates', value: '43', delta: '+8 this week', icon: Users, color: '#3b82f6' },
            { label: 'Portfolio Quality Avg', value: '82.4', delta: '+4.2 pts', icon: Star, color: '#10b981' },
            { label: 'Avg. Signal Accuracy', value: '94%', delta: 'AI-verified', icon: Activity, color: '#06b6d4' },
            { label: 'Days to Hire (Avg)', value: '18', delta: '-12 days', icon: Clock, color: '#f59e0b' },
          ].map(({ label, value, delta, icon: Icon, color }) => (
            <div key={label} className="arc-card p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="metric-label">{label}</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
                  <Icon size={13} style={{ color }} />
                </div>
              </div>
              <div className="text-2xl font-semibold text-arc-text mb-1">{value}</div>
              <div className="text-[11px]" style={{ color }}>{delta}</div>
            </div>
          ))}
        </div>

        {/* Main section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Center: bubble map */}
          <div className="xl:col-span-2 arc-card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-arc-border">
              <h2 className="text-sm font-semibold text-arc-text">Talent Intelligence Map</h2>
              <button className="text-[11px] text-arc-faint hover:text-arc-subtle flex items-center gap-1">
                <Eye size={11} /> Expand
              </button>
            </div>

            <div className="h-[380px] p-4 relative">
              <BubbleCluster onSelect={() => onNavigate('candidate')} />
            </div>
          </div>

          {/* Right: AI Insights panel */}
          <div className="flex flex-col gap-3">
            <div className="arc-card p-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-arc-blue" />
                <h3 className="text-sm font-semibold text-arc-text">Live AI Recommendations</h3>
              </div>
              <div className="space-y-2.5">
                {insightCards.map(({ title, body, action, color }) => (
                  <div key={title} className="insight-card p-3.5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        color === 'amber' ? 'bg-amber-400' :
                        color === 'emerald' ? 'bg-emerald-400' : 'bg-blue-400'
                      }`} />
                      <span className="text-[10px] font-semibold text-arc-text">{title}</span>
                    </div>
                    <p className="text-[11px] text-arc-faint leading-relaxed mb-2">{body}</p>
                    <button className="text-[10px] flex items-center gap-1"
                      style={{ color: color === 'amber' ? '#fbbf24' : color === 'emerald' ? '#34d399' : '#60a5fa' }}>
                      {action} <ChevronRight size={10} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Archetype distribution */}
            <div className="arc-card p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={13} className="text-arc-faint" />
                <h3 className="text-xs font-semibold text-arc-text">Archetype Distribution</h3>
              </div>
              <div className="space-y-2.5">
                {archetypes.map(({ label, count, pct, color }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-[11px] text-arc-subtle">{label}</span>
                        <span className="text-[11px] text-arc-faint">{count}</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: `${pct}%`, background: color }} />
                      </div>
                    </div>
                    <span className="text-[10px] text-arc-faint w-6 text-right">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Candidate table */}
        <div className="arc-card overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-arc-border">
            <h2 className="text-sm font-semibold text-arc-text">Active Candidates</h2>
            <button className="text-[11px] text-arc-blue flex items-center gap-1 hover:underline">
              View All <ArrowUpRight size={11} />
            </button>
          </div>
          <div className="divide-y divide-arc-border">
            {candidates.map(({ name, role, score, stage, match, avatar }) => (
              <div
                key={name}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors cursor-pointer"
                onClick={() => onNavigate('candidate')}
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-arc-blue to-arc-cyan flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
                  {avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-arc-text">{name}</div>
                  <div className="text-xs text-arc-faint mt-0.5">{role}</div>
                </div>
                <div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-md bg-arc-muted/50">
                  <Activity size={10} className="text-arc-faint" />
                  <span className="text-[11px] text-arc-subtle">{stage}</span>
                </div>
                <div className={`tag hidden sm:flex ${match === 'Exceptional' ? 'tag-emerald' : match === 'High Potential' ? '' : 'tag-amber'}`}>
                  {match}
                </div>
                <div className="flex items-center gap-1.5 w-16 text-right">
                  <div className="flex-1 h-1 rounded-full bg-arc-border overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-arc-blue to-arc-cyan" style={{ width: `${score}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-arc-text w-6">{score}</span>
                </div>
                <ChevronRight size={14} className="text-arc-faint flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
