import { Zap, ArrowRight, ChevronRight, Activity, Users, Star, TrendingUp } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

const floatingCards = [
  {
    name: 'Maya Chen',
    role: 'Senior Product Designer',
    archetype: 'Systems Thinker',
    score: 94,
    match: 'Strong Match',
    x: 'left-[5%]',
    y: 'top-[20%]',
    delay: '0s',
  },
  {
    name: 'Eli Torres',
    role: 'Motion Designer',
    archetype: 'Narrative Craftsman',
    score: 88,
    match: 'High Potential',
    x: 'right-[4%]',
    y: 'top-[15%]',
    delay: '2s',
  },
  {
    name: 'Priya Nair',
    role: 'Creative Strategist',
    archetype: 'Cultural Catalyst',
    score: 91,
    match: 'Exceptional',
    x: 'left-[3%]',
    y: 'bottom-[18%]',
    delay: '1s',
  },
];

const metrics = [
  { label: 'Candidates Analyzed', value: '12,847', delta: '+23%', icon: Users },
  { label: 'Avg. Signal Accuracy', value: '94.2%', delta: '+8pt', icon: Activity },
  { label: 'Hires Made', value: '2,341', delta: '+41%', icon: Star },
  { label: 'Time-to-Hire Reduction', value: '68%', delta: '-68%', icon: TrendingUp },
];

export default function Landing({ onEnter }: LandingProps) {
  return (
    <div className="min-h-screen bg-arc-bg relative overflow-hidden flex flex-col">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
        <div className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)' }} />
      </div>

      {/* Signal network SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(6,182,212,0.12)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="rgba(59,130,246,0.1)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="50%" y1="50%" x2="80%" y2="72%" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="50%" cy="50%" r="4" fill="#3b82f6" opacity="0.6" />
        <circle cx="50%" cy="50%" r="12" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <circle cx="25%" cy="30%" r="3" fill="#3b82f6" opacity="0.4" />
        <circle cx="75%" cy="25%" r="2.5" fill="#06b6d4" opacity="0.4" />
        <circle cx="20%" cy="70%" r="2.5" fill="#3b82f6" opacity="0.3" />
        <circle cx="80%" cy="72%" r="3" fill="#06b6d4" opacity="0.4" />
      </svg>

      {/* Header nav */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
            <Zap size={15} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] text-arc-text uppercase">ARC</span>
          <span className="text-[10px] text-arc-faint tracking-widest border border-arc-faint/30 rounded px-1.5 py-0.5 uppercase">Beta</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {['Platform', 'Intelligence', 'Enterprise', 'Pricing'].map(item => (
            <button key={item} className="text-xs text-arc-faint hover:text-arc-subtle transition-colors tracking-wide">{item}</button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onEnter} className="arc-btn-ghost text-xs">Sign In</button>
          <button onClick={onEnter} className="arc-btn-primary text-xs">Request Demo</button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
        <div className="flex items-center gap-2 mb-8">
          <div className="signal-dot" />
          <span className="text-xs text-arc-faint tracking-widest uppercase">Creative Intelligence Operating System</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-arc-text max-w-5xl leading-[1.05] mb-6">
          Understand Creative{' '}
          <span className="font-display italic text-gradient-blue">Talent</span>
          <br />
          Beyond Portfolios.
        </h1>

        <p className="text-arc-subtle text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          ARC decodes creative intelligence - mapping systems thinking, narrative instinct,
          and design maturity into signals that predict long-term team impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-16">
          <button onClick={onEnter} className="arc-btn-primary flex items-center gap-1.5 text-xs">
            Enter Platform <ArrowRight size={13} />
          </button>
          <button onClick={onEnter} className="flex items-center gap-1.5 text-xs text-arc-subtle hover:text-arc-text transition-colors">
            View Platform Demo <ChevronRight size={13} />
          </button>
        </div>

        {/* Metrics strip */}
        <div className="flex flex-wrap justify-center gap-px mb-16">
          {metrics.map(({ label, value, delta, icon: Icon }) => (
            <div key={label} className="glass px-6 py-4 flex flex-col items-center min-w-[140px]">
              <div className="flex items-center gap-1.5 mb-1">
                <Icon size={11} className="text-arc-blue" />
                <span className="metric-label">{label}</span>
              </div>
              <div className="text-xl font-semibold text-arc-text">{value}</div>
              <div className="text-[10px] text-arc-emerald mt-0.5">{delta} this quarter</div>
            </div>
          ))}
        </div>

        {/* AI insight preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl w-full">
          {[
            { text: 'Maya Chen shows exceptional systems thinking - top 3% of 12K candidates evaluated.', type: 'signal' },
            { text: 'Portfolio drop-off rate increased 34% after stage 2 in Q4 - review evaluation criteria.', type: 'warning' },
            { text: '3 candidates strongly match your top-performing designer\'s DNA profile.', type: 'match' },
          ].map(({ text, type }) => (
            <div key={text} className="insight-card p-4 text-left">
              <div className="flex items-center gap-1.5 mb-2">
                <div className={`w-1.5 h-1.5 rounded-full ${type === 'warning' ? 'bg-amber-400' : type === 'match' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                <span className="text-[10px] uppercase tracking-widest text-arc-faint">
                  {type === 'warning' ? 'Warning' : type === 'match' ? 'Match Signal' : 'Intelligence'}
                </span>
              </div>
              <p className="text-xs text-arc-subtle leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Floating candidate cards */}
      {floatingCards.map(card => (
        <div
          key={card.name}
          className={`absolute ${card.x} ${card.y} hidden xl:block animate-float pointer-events-none`}
          style={{ animationDelay: card.delay }}
        >
          <div className="glass rounded-xl p-4 w-52 border border-arc-blue/20">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-arc-blue to-arc-cyan flex items-center justify-center text-xs font-semibold text-white">
                {card.name[0]}
              </div>
              <div>
                <div className="text-xs font-semibold text-arc-text">{card.name}</div>
                <div className="text-[10px] text-arc-faint">{card.role}</div>
              </div>
            </div>
            <div className="text-[9px] uppercase tracking-widest text-arc-faint mb-1">Archetype</div>
            <div className="text-xs font-medium text-arc-subtle mb-3">{card.archetype}</div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-arc-emerald">{card.match}</div>
              <div className="text-lg font-bold text-arc-text">{card.score}<span className="text-xs text-arc-faint">/100</span></div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom bar */}
      <footer className="relative z-10 border-t border-arc-border px-8 py-4 flex items-center justify-between">
        <div className="text-[11px] text-arc-faint">
          2028 ARC Intelligence Inc. - The Creative Hiring OS
        </div>
        <div className="flex items-center gap-4">
          {['Privacy', 'Terms', 'Security'].map(item => (
            <button key={item} className="text-[11px] text-arc-faint hover:text-arc-subtle transition-colors">{item}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
