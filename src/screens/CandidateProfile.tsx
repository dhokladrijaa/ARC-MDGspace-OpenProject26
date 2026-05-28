import { Star, Activity, Clock, Sparkles, ArrowLeft, MessageSquare, Eye, Download, ChevronRight, Camera, Layers, GitBranch, Mic, FileText } from 'lucide-react';

interface CandidateProfileProps {
  onBack: () => void;
  onPortfolio: () => void;
}

const skills = [
  { label: 'Systems Thinking', value: 96, color: '#3b82f6' },
  { label: 'Visual Craft', value: 88, color: '#06b6d4' },
  { label: 'Storytelling', value: 91, color: '#10b981' },
  { label: 'Experimentation', value: 84, color: '#f59e0b' },
  { label: 'Collaboration', value: 79, color: '#f43f5e' },
  { label: 'Research Depth', value: 87, color: '#8b5cf6' },
  { label: 'Execution Speed', value: 73, color: '#06b6d4' },
  { label: 'Concept Fluency', value: 93, color: '#3b82f6' },
];

const timelineItems = [
  { date: 'Jan 12', label: 'Initial Concept Sketches', note: 'Explores 3 distinct mental models before converging.', icon: Camera, color: '#3b82f6' },
  { date: 'Jan 15', label: 'Low-Fidelity IA', note: 'Architecture reflects deep user-flow empathy.', icon: Layers, color: '#06b6d4' },
  { date: 'Jan 19', label: 'Pivot: Reframed Problem', note: 'Self-initiated scope reframe based on user insight.', icon: GitBranch, color: '#f59e0b' },
  { date: 'Jan 23', label: 'Component System v1 to v3', note: '12 component iterations. Systems instinct evident.', icon: Activity, color: '#10b981' },
  { date: 'Jan 28', label: 'Stakeholder Presentation', note: 'Framing was narrative-led, not feature-led.', icon: Mic, color: '#f43f5e' },
  { date: 'Feb 02', label: 'Final Delivery + Docs', note: 'Handoff docs exceed industry standard.', icon: FileText, color: '#3b82f6' },
];

const observations = [
  { label: 'Core Strength', text: 'Exceptionally rare ability to hold both macro systems thinking and micro visual precision simultaneously.', type: 'strength' },
  { label: 'Growth Edge', text: 'Occasionally over-engineers early-stage concepts. Benefits from explicit time constraints.', type: 'weakness' },
  { label: 'Communication Style', text: 'Narrative-first presenter. Structures complex ideas through story arcs.', type: 'neutral' },
  { label: 'Leadership Signal', text: 'Exhibits quiet leadership - influences through artifact quality.', type: 'strength' },
];

function SkillWeb() {
  const size = 200;
  const center = size / 2;
  const angleStep = (2 * Math.PI) / skills.length;

  const getPoint = (angle: number, radius: number) => ({
    x: center + radius * Math.cos(angle - Math.PI / 2),
    y: center + radius * Math.sin(angle - Math.PI / 2),
  });

  const skillPoints = skills.map((s, i) => {
    const angle = i * angleStep;
    const r = (s.value / 100) * (center - 20);
    return getPoint(angle, r);
  });

  const pathData = skillPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <defs>
        <radialGradient id="webFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1.0].map(l => (
        <circle key={l} cx={center} cy={center} r={(center - 20) * l} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      {skills.map((_, i) => {
        const angle = i * angleStep;
        const outer = getPoint(angle, center - 20);
        return <line key={i} x1={center} y1={center} x2={outer.x} y2={outer.y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />;
      })}
      <path d={pathData} fill="url(#webFill)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.6" />
      {skillPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill={skills[i].color} stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
      ))}
    </svg>
  );
}

export default function CandidateProfile({ onBack, onPortfolio }: CandidateProfileProps) {
  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      {/* Back nav */}
      <div className="sticky top-0 z-20 flex items-center gap-3 px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <button onClick={onBack} className="flex items-center gap-2 text-arc-faint hover:text-arc-text transition-colors text-sm">
          <ArrowLeft size={14} /> Dashboard
        </button>
        <span className="text-arc-border">/</span>
        <span className="text-sm text-arc-subtle">Maya Chen</span>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={onPortfolio} className="arc-btn-ghost text-xs flex items-center gap-1.5">
            <Eye size={12} /> View Portfolio
          </button>
          <button className="arc-btn-primary text-xs flex items-center gap-1.5">
            <MessageSquare size={12} /> Start Interview
          </button>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative overflow-hidden border-b border-arc-border">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />

        <div className="relative px-6 py-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar + score */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white font-display">MC</div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>94</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="tag-emerald tag text-[9px]">Exceptional Match</div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={10} className={s <= 4 ? 'text-amber-400 fill-amber-400' : 'text-arc-faint'} />
                ))}
              </div>
            </div>
          </div>

          {/* Identity block */}
          <div className="flex-1">
            <div className="metric-label mb-1">Creative Intelligence Report</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-arc-text mb-1">Maya Chen</h1>
            <p className="text-arc-subtle text-base mb-3">Senior Product Designer - San Francisco, CA</p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-5"
              style={{ background: 'rgba(59,130,246,0.08)', borderColor: 'rgba(59,130,246,0.2)' }}>
              <Sparkles size={12} className="text-arc-blue" />
              <span className="text-sm font-medium text-arc-text">Systems-Driven Product Thinker</span>
            </div>

            <p className="text-arc-subtle text-sm leading-relaxed max-w-2xl mb-5">
              Maya operates at the intersection of product strategy and visual precision. Her work reveals
              an uncommon capacity to architect complex interaction systems while maintaining meticulous
              visual quality - a combination that places her in the top 3% of candidates evaluated this quarter.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Product Strategy', 'Motion'].map(tag => (
                <span key={tag} className="tag text-[10px]">{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-col gap-3 min-w-[160px]">
            {[
              { label: 'Overall Score', value: '94 / 100', color: '#3b82f6' },
              { label: 'Years Experience', value: '7 years', color: '#10b981' },
              { label: 'Portfolio Projects', value: '12 cases', color: '#f59e0b' },
              { label: 'AI Confidence', value: '96%', color: '#06b6d4' },
            ].map(({ label, value, color }) => (
              <div key={label} className="arc-card p-3">
                <div className="text-[10px] text-arc-faint uppercase tracking-wide mb-1">{label}</div>
                <div className="text-sm font-semibold" style={{ color }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Skill web */}
          <div className="arc-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={13} className="text-arc-blue" />
              <h3 className="text-sm font-semibold text-arc-text">Creative Intelligence Web</h3>
            </div>
            <SkillWeb />
          </div>

          {/* Skill bars */}
          <div className="arc-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <Star size={13} className="text-arc-faint" />
              <h3 className="text-sm font-semibold text-arc-text">Signal Breakdown</h3>
            </div>
            <div className="space-y-5">
              {skills.map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-medium text-arc-subtle">{label}</span>
                    <span className="text-xs font-semibold text-arc-text">{value}<span className="text-arc-faint">/100</span></span>
                  </div>
                  <div className="h-1.5 rounded-full bg-arc-border overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thinking Replay timeline */}
        <div className="arc-card p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Clock size={14} className="text-arc-blue" />
            <h3 className="text-sm font-semibold text-arc-text">Thinking Replay</h3>
            <span className="text-xs text-arc-faint ml-1">- AI-reconstructed design decision timeline</span>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-arc-blue/40 via-arc-blue/10 to-transparent" />
            <div className="space-y-0">
              {timelineItems.map(({ date, label, note, icon: Icon, color }, i) => (
                <div key={i} className="relative flex gap-6 pl-12 pb-8 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, borderColor: `${color}40` }}>
                    <Icon size={12} style={{ color }} />
                  </div>
                  <div className="flex-1 arc-card p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-arc-text">{label}</span>
                      <span className="text-[10px] text-arc-faint">{date}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Sparkles size={10} className="text-arc-blue mt-0.5 flex-shrink-0" />
                      <p className="text-[11px] text-arc-subtle leading-relaxed italic">{note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Observations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {observations.map(({ label, text, type }) => (
            <div key={label} className={`arc-card p-5 ${
              type === 'strength' ? 'border-l-2 border-l-emerald-500/50' :
              type === 'weakness' ? 'border-l-2 border-l-amber-500/50' : 'border-l-2 border-l-arc-blue/40'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${
                  type === 'strength' ? 'bg-emerald-400' : type === 'weakness' ? 'bg-amber-400' : 'bg-blue-400'
                }`} />
                <span className="text-xs font-semibold text-arc-text">{label}</span>
              </div>
              <p className="text-sm text-arc-subtle leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action footer */}
      <div className="sticky bottom-0 border-t border-arc-border bg-arc-bg/95 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="signal-dot" />
          <span className="text-xs text-arc-faint">AI analysis updated 2 minutes ago</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="arc-btn-ghost text-xs flex items-center gap-1.5">
            <Download size={12} /> Export Report
          </button>
          <button onClick={onPortfolio} className="arc-btn-ghost text-xs flex items-center gap-1.5">
            <Eye size={12} /> Portfolio
          </button>
          <button className="arc-btn-primary text-xs flex items-center gap-1.5">
            Move to Interview <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
