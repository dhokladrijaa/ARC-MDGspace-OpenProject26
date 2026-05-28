import { ArrowLeft, ChevronRight, ChevronLeft, Sparkles, Eye, MessageSquare, AlertCircle, CheckCircle, ZoomIn, Star } from 'lucide-react';

interface PortfolioImmersionProps {
  onBack: () => void;
}

const projects = [
  {
    title: 'Meridian Health Platform',
    subtitle: 'End-to-End Patient Experience Redesign',
    tags: ['Healthcare', 'Systems Design', 'Complex Navigation'],
    description: 'A full redesign of a legacy patient portal serving 2M users. Maya led the information architecture, component system, and patient journey mapping.',
    outcome: '+47% task completion, -34% support tickets',
    duration: '6 months',
    color: '#3b82f6',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
  },
  {
    title: 'Lens Design System',
    subtitle: 'Component Library for Enterprise Scale',
    tags: ['Design Systems', 'Tokenization', 'Accessibility'],
    description: 'Built from scratch for a Series B fintech startup. 140+ components, full dark/light mode, WCAG 2.1 AA compliant.',
    outcome: '140 components - 3 brands - 60% faster delivery',
    duration: '8 months',
    color: '#10b981',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
  },
];

const annotations = [
  { x: '18%', y: '22%', label: 'Strong stakeholder communication', type: 'positive' },
  { x: '62%', y: '15%', label: 'Excellent systems scalability', type: 'positive' },
  { x: '38%', y: '70%', label: 'Weak accessibility reasoning', type: 'warning' },
  { x: '78%', y: '58%', label: 'Strong product narrative', type: 'positive' },
];

const processSteps = [
  { phase: 'Discovery', items: ['24 user interviews', 'Competitive mapping', 'JTBD synthesis'], icon: '01', color: '#3b82f6' },
  { phase: 'Define', items: ['5 core archetypes', 'Pain point taxonomy', 'Success metrics'], icon: '02', color: '#06b6d4' },
  { phase: 'Design', items: ['32 concept sketches', '140+ components', 'Interaction specs'], icon: '03', color: '#10b981' },
  { phase: 'Deliver', items: ['Developer handoff', 'QA testing', 'Post-launch monitor'], icon: '04', color: '#f59e0b' },
];

export default function PortfolioImmersion({ onBack }: PortfolioImmersionProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredAnnotation, setHoveredAnnotation] = useState<number | null>(null);
  const [showAnnotations, setShowAnnotations] = useState(true);

  const project = projects[activeProject];

  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      {/* Top nav */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="flex items-center gap-2 text-arc-faint hover:text-arc-text transition-colors text-sm">
            <ArrowLeft size={14} /> Maya Chen
          </button>
          <span className="text-arc-border">/</span>
          <span className="text-sm text-arc-subtle">Portfolio Immersion</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              showAnnotations ? 'bg-arc-blue/10 border-arc-blue/20 text-arc-blue' : 'border-arc-border text-arc-faint'
            }`}
          >
            <Sparkles size={11} /> AI Annotations {showAnnotations ? 'On' : 'Off'}
          </button>
          <button className="arc-btn-primary text-xs flex items-center gap-1.5">
            <MessageSquare size={11} /> Add Note
          </button>
        </div>
      </div>

      {/* Project selector */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-arc-border overflow-x-auto">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setActiveProject(i)}
            className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-left transition-all ${
              activeProject === i ? 'border-arc-blue/30 bg-arc-blue/8' : 'border-arc-border hover:border-arc-muted bg-arc-card'
            }`}
            style={activeProject === i ? { background: `${p.color}08`, borderColor: `${p.color}30` } : {}}
          >
            <div className="w-1.5 h-8 rounded-full" style={{ background: activeProject === i ? p.color : '#2a2a3a' }} />
            <div>
              <div className="text-xs font-semibold text-arc-text">{p.title}</div>
              <div className="text-[10px] text-arc-faint mt-0.5">{p.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Project content */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(t => <span key={t} className="tag text-[10px]">{t}</span>)}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-arc-text mb-2">{project.title}</h1>
          <p className="text-lg text-arc-subtle font-light mb-4">{project.subtitle}</p>
          <p className="text-sm text-arc-faint leading-relaxed max-w-2xl mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">{project.outcome}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-arc-faint" />
              <span className="text-sm text-arc-faint">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Annotated image */}
        <div className="relative rounded-2xl overflow-hidden border border-arc-border mb-8 group">
          <img src={project.image} alt={project.title} className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.2), rgba(10,10,15,0.6))' }} />

          <div className="absolute bottom-6 left-6 glass rounded-xl p-4 border border-white/10">
            <div className="text-[10px] text-arc-faint uppercase tracking-widest mb-1">Project Impact</div>
            <div className="text-2xl font-bold text-arc-text mb-1">{project.outcome.split('-')[0]}</div>
            <div className="text-xs text-arc-faint">{project.duration} engagement</div>
          </div>

          <div className="absolute top-4 right-4 w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <ZoomIn size={13} className="text-arc-subtle" />
          </div>

          {/* AI Annotations */}
          {showAnnotations && annotations.map((ann, i) => (
            <div key={i} className="absolute cursor-pointer" style={{ left: ann.x, top: ann.y }}
              onMouseEnter={() => setHoveredAnnotation(i)} onMouseLeave={() => setHoveredAnnotation(null)}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                ann.type === 'warning' ? 'bg-amber-500/20 border-amber-500/60' : 'bg-blue-500/20 border-blue-500/60'
              }`}>
                {ann.type === 'warning' ? <AlertCircle size={10} className="text-amber-400" /> : <CheckCircle size={10} className="text-blue-400" />}
              </div>
              {hoveredAnnotation === i && (
                <div className="absolute z-10 left-6 -top-1 glass rounded-xl p-3 border border-white/10 w-56 shadow-2xl">
                  <div className={`text-[10px] uppercase tracking-widest mb-1 font-semibold ${ann.type === 'warning' ? 'text-amber-400' : 'text-blue-400'}`}>
                    {ann.type === 'warning' ? 'Improvement Area' : 'AI Signal'}
                  </div>
                  <div className="text-xs font-medium text-arc-text">{ann.label}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process breakdown */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-5">
            <Eye size={13} className="text-arc-blue" />
            <h3 className="text-sm font-semibold text-arc-text">Process Breakdown</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {processSteps.map(({ phase, items, icon, color }) => (
              <div key={phase} className="arc-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold font-mono" style={{ color }}>{icon}</span>
                  <span className="text-xs font-semibold text-arc-text">{phase}</span>
                </div>
                <div className="space-y-1.5">
                  {items.map(item => (
                    <div key={item} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                      <span className="text-[11px] text-arc-faint leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Portfolio Score', value: '91 / 100', detail: 'Top 5% of product designers', color: '#3b82f6' },
            { label: 'Narrative Strength', value: 'Exceptional', detail: 'User impact framing', color: '#10b981' },
            { label: 'Accessibility', value: 'Developing', detail: 'Under-documented', color: '#f59e0b' },
          ].map(({ label, value, detail, color }) => (
            <div key={label} className="insight-card p-4">
              <div className="text-[10px] uppercase tracking-widest text-arc-faint mb-2">{label}</div>
              <div className="text-base font-semibold mb-1.5" style={{ color }}>{value}</div>
              <p className="text-[11px] text-arc-faint">{detail}</p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex justify-between items-center pt-4 border-t border-arc-border">
          <button onClick={() => setActiveProject(Math.max(0, activeProject - 1))}
            className="flex items-center gap-2 arc-btn-ghost text-xs" disabled={activeProject === 0}>
            <ChevronLeft size={12} /> Previous
          </button>
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button key={i} onClick={() => setActiveProject(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeProject ? 'bg-arc-blue' : 'bg-arc-faint'}`} />
            ))}
          </div>
          <button onClick={() => setActiveProject(Math.min(projects.length - 1, activeProject + 1))}
            className="flex items-center gap-2 arc-btn-ghost text-xs" disabled={activeProject === projects.length - 1}>
            Next <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

function useState<T>(initial: T): [T, (v: T) => void] {
  let value = initial;
  const setState = (v: T) => { value = v; };
  return [value, setState];
}
