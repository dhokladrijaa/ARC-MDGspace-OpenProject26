import { Sparkles, Plus, Zap, Brain, Target, Users, Lightbulb, RefreshCw } from 'lucide-react';

interface InterviewGeneratorProps {
  onNavigate: (screen: string) => void;
}

const roleOptions = ['Senior Product Designer', 'UX Researcher', 'Motion Designer', 'Creative Strategist', 'Visual Designer'];
const seniorityOptions = ['Junior (0-2 yrs)', 'Mid (2-5 yrs)', 'Senior (5-8 yrs)', 'Principal (8+ yrs)'];
const stageOptions = ['Seed', 'Series A', 'Series B', 'Series C+', 'Enterprise'];
const maturityOptions = ['Nascent', 'Developing', 'Established', 'Advanced'];

const generatedModules = [
  { id: 1, type: 'Portfolio Prompt', icon: Target, color: '#3b82f6', title: 'Systems Thinking Deep-Dive', duration: '25 min', description: 'Walk us through a project where you had to design for multiple user types with conflicting needs.', tags: ['Systems', 'Trade-offs'] },
  { id: 2, type: 'Whiteboard Exercise', icon: Brain, color: '#10b981', title: 'Ambiguous Problem Framing', duration: '30 min', description: 'You have been handed the brief: "Make our product more trustworthy." How would you approach this?', tags: ['Strategy', 'Ambiguity'] },
  { id: 3, type: 'Collaboration Test', icon: Users, color: '#f59e0b', title: 'Cross-Functional Influence Simulation', duration: '20 min', description: 'A PM has pushed back on your design recommendation citing engineering complexity. Role-play how you would navigate this.', tags: ['Influence', 'Conflict'] },
  { id: 4, type: 'Behavioral', icon: Lightbulb, color: '#06b6d4', title: 'Learning Velocity Signal', duration: '15 min', description: 'Tell me about the last time you were wrong about a major design decision. What did you learn?', tags: ['Growth', 'Self-Awareness'] },
];

export default function InterviewGenerator({ onNavigate }: InterviewGeneratorProps) {
  const role = 'Senior Product Designer';
  const seniority = 'Senior (5-8 yrs)';
  const stage = 'Series B';
  const maturity = 'Developing';
  const generating = false;

  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      {/* Top bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <div>
          <h1 className="text-base font-semibold text-arc-text">AI Interview Generator</h1>
          <p className="text-xs text-arc-faint mt-0.5">Modular interview workflows, built by intelligence</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="arc-btn-ghost text-xs">Save Template</button>
          <button className="arc-btn-primary text-xs flex items-center gap-1.5">
            <Zap size={12} /> Export Flow
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left: Configuration */}
          <div className="xl:col-span-1 space-y-4">
            <div className="arc-card p-5">
              <div className="flex items-center gap-2 mb-5">
                <Zap size={13} className="text-arc-blue" />
                <h3 className="text-sm font-semibold text-arc-text">Interview Parameters</h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Target Role', value: role, options: roleOptions },
                  { label: 'Seniority Level', value: seniority, options: seniorityOptions },
                  { label: 'Company Stage', value: stage, options: stageOptions },
                  { label: 'Design Maturity', value: maturity, options: maturityOptions },
                ].map(({ label, value, options }) => (
                  <div key={label}>
                    <label className="metric-label block mb-1.5">{label}</label>
                    <select value={value}
                      className="w-full bg-arc-card border border-arc-border rounded-lg px-3 py-2 text-sm text-arc-text focus:outline-none focus:border-arc-blue/50 transition-colors">
                      {options.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              {/* Missing skills */}
              <div className="mt-4">
                <label className="metric-label block mb-2">Missing Team Capabilities</label>
                <div className="flex flex-wrap gap-1.5">
                  {['Accessibility', 'Motion', 'Data Viz'].map(cap => (
                    <button key={cap} className="text-[10px] px-2.5 py-1 rounded-md border border-arc-border text-arc-faint hover:border-arc-blue/30 hover:text-arc-subtle transition-colors">
                      + {cap}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Systems Design', 'Facilitation'].map(cap => (
                    <span key={cap} className="tag text-[10px]">{cap} x</span>
                  ))}
                </div>
              </div>

              <button
                className="w-full mt-5 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{ background: generating ? 'rgba(59,130,246,0.3)' : 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
              >
                {generating ? <><RefreshCw size={13} className="animate-spin" /> Generating...</> : <><Sparkles size={13} /> Generate Interview Flow</>}
              </button>
            </div>

            <div className="insight-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={11} className="text-arc-blue" />
                <span className="text-[10px] uppercase tracking-widest text-arc-faint">AI Reasoning</span>
              </div>
              <p className="text-xs text-arc-subtle leading-relaxed">
                For a <strong className="text-arc-text">Senior Product Designer</strong> at a <strong className="text-arc-text">Series B</strong> company,
                this flow prioritizes systems thinking depth and cross-functional communication.
              </p>
            </div>
          </div>

          {/* Right: Generated modules */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-arc-text">Generated Interview Flow</h3>
                <span className="tag text-[10px]">{generatedModules.length} modules</span>
              </div>
              <button className="text-xs text-arc-blue flex items-center gap-1">
                <Plus size={11} /> Add Module
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-arc-blue/30 via-arc-blue/10 to-transparent pointer-events-none" />
              <div className="space-y-3">
                {generatedModules.map(({ id, type, icon: Icon, color, title, duration, description, tags }, i) => (
                  <div key={id} className="arc-card p-5 relative hover:border-arc-blue/15" style={{ paddingLeft: '52px' }}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                        style={{ borderColor: color, color, background: `${color}15` }}>
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${color}18` }}>
                            <Icon size={11} style={{ color }} />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest" style={{ color }}>{type}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-arc-text mb-1.5">{title}</h4>
                        <p className="text-xs text-arc-faint leading-relaxed mb-3">{description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-arc-muted/50 text-arc-faint border border-arc-border">{t}</span>)}
                        </div>
                      </div>
                      <div className="text-center flex-shrink-0">
                        <div className="text-lg font-semibold text-arc-text">{duration}</div>
                        <div className="text-[9px] text-arc-faint uppercase tracking-wide">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-arc-border">
                      <div className="flex items-center gap-1.5">
                        <Sparkles size={10} className="text-arc-blue" />
                        <span className="text-[10px] text-arc-faint">AI-generated - Customizable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-[10px] text-arc-faint hover:text-arc-subtle transition-colors">Edit</button>
                        <button className="text-[10px] text-arc-faint hover:text-arc-subtle transition-colors">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
