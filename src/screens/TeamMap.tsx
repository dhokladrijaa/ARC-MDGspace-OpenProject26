import { Users, AlertCircle, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';

interface TeamMapProps {
  onNavigate: (screen: string) => void;
}

const gapCards = [
  { label: 'Missing: Motion Design', detail: 'No motion designer on team - impacts storytelling quality', severity: 'high', color: '#f43f5e' },
  { label: 'Weak: Accessibility Depth', detail: 'Current team accessibility coverage rated 42/100.', severity: 'high', color: '#f59e0b' },
  { label: 'Gap: Strategic Facilitation', detail: 'Team lacks design strategy capability as you scale to Series B', severity: 'medium', color: '#06b6d4' },
];

const teamMembers = [
  { id: 'lead', name: 'Alex Rivera', role: 'Design Lead', archetype: 'Systems Thinker', cx: 280, cy: 200, r: 42, color: '#3b82f6', isLead: true },
  { id: 'm1', name: 'Sam Okafor', role: 'Visual Designer', archetype: 'Visual Purist', cx: 160, cy: 130, r: 32, color: '#10b981' },
  { id: 'm2', name: 'Jordan Lin', role: 'Product Designer', archetype: 'Researcher', cx: 400, cy: 130, r: 34, color: '#06b6d4' },
  { id: 'm3', name: 'Tara Singh', role: 'UX Researcher', archetype: 'Empathy Bridge', cx: 130, cy: 280, r: 30, color: '#f59e0b' },
  { id: 'm4', name: 'Chris Wolfe', role: 'Interaction Designer', archetype: 'Narrative Craftsman', cx: 430, cy: 280, r: 30, color: '#f43f5e' },
];

const candidates = [
  { id: 'c1', name: 'Maya Chen', archetype: 'Systems Thinker', cx: 280, cy: 360, r: 28, color: '#3b82f6', score: 94 },
  { id: 'c2', name: 'Priya Nair', archetype: 'Cultural Catalyst', cx: 500, cy: 200, r: 24, color: '#10b981', score: 91 },
];

function NetworkGraph({ onSelectCandidate }: { onSelectCandidate: (name: string) => void }) {
  const connections = [
    ['lead', 'm1'], ['lead', 'm2'], ['lead', 'm3'], ['lead', 'm4'],
    ['m1', 'm3'], ['m2', 'm4'], ['lead', 'c1'], ['m2', 'c1'], ['lead', 'c2'],
  ];

  const allNodes = [...teamMembers, ...candidates];
  const getNode = (id: string) => allNodes.find(n => n.id === id)!;

  return (
    <svg className="w-full h-full" viewBox="0 0 560 440" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {allNodes.map(n => (
          <radialGradient key={`g-${n.id}`} id={`g-${n.id}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor={n.color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={n.color} stopOpacity="0.12" />
          </radialGradient>
        ))}
      </defs>

      {connections.map(([a, b], i) => {
        const nodeA = getNode(a);
        const nodeB = getNode(b);
        const isCandidate = a.startsWith('c') || b.startsWith('c');
        return (
          <line key={i} x1={nodeA.cx} y1={nodeA.cy} x2={nodeB.cx} y2={nodeB.cy}
            stroke={isCandidate ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)'}
            strokeWidth={isCandidate ? 1.5 : 1} strokeDasharray={isCandidate ? '4 6' : '0'} />
        );
      })}

      {teamMembers.map(node => (
        <g key={node.id} className="cursor-pointer">
          <circle cx={node.cx} cy={node.cy} r={node.r + 4} fill="none" stroke={node.color} strokeWidth="0.3" strokeOpacity="0.2" />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={`url(#g-${node.id})`} stroke={node.color} strokeWidth={node.isLead ? 2 : 1} strokeOpacity="0.4" />
          <text x={node.cx} y={node.cy - 6} textAnchor="middle" fill="rgba(232,232,240,0.9)" fontSize={node.isLead ? 9 : 8} fontFamily="Inter, sans-serif" fontWeight="600">
            {node.name.split(' ')[0]}
          </text>
          <text x={node.cx} y={node.cy + 7} textAnchor="middle" fill="rgba(136,136,168,0.7)" fontSize="6.5" fontFamily="Inter, sans-serif">
            {node.archetype.split(' ')[0]}
          </text>
        </g>
      ))}

      {candidates.map(node => (
        <g key={node.id} className="cursor-pointer" onClick={() => onSelectCandidate(node.name)}>
          <circle cx={node.cx} cy={node.cy} r={node.r + 4} fill="none" stroke={node.color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 4" />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={`url(#g-${node.id})`} stroke={node.color} strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.6" />
          <text x={node.cx} y={node.cy - 5} textAnchor="middle" fill="rgba(232,232,240,0.85)" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500">
            {node.name.split(' ')[0]}
          </text>
          <text x={node.cx} y={node.cy + node.r + 12} textAnchor="middle" fill="rgba(59,130,246,0.6)" fontSize="6" fontFamily="Inter, sans-serif" letterSpacing="1">CANDIDATE</text>
        </g>
      ))}

      <g transform="translate(16, 400)">
        <circle cx="6" cy="6" r="5" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="0.8" />
        <text x="16" y="10" fill="rgba(136,136,168,0.6)" fontSize="7" fontFamily="Inter, sans-serif">Team Member</text>
        <circle cx="100" cy="6" r="5" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
        <text x="110" y="10" fill="rgba(136,136,168,0.6)" fontSize="7" fontFamily="Inter, sans-serif">Candidate</text>
      </g>
    </svg>
  );
}

export default function TeamMap({ onNavigate }: TeamMapProps) {
  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      {/* Top bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <div>
          <h1 className="text-base font-semibold text-arc-text">Team Compatibility Map</h1>
          <p className="text-xs text-arc-faint mt-0.5">Organizational intelligence - Design team - Q1 2028</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* Network graph */}
          <div className="xl:col-span-2 arc-card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-arc-border">
              <div className="flex items-center gap-2">
                <Users size={13} className="text-arc-blue" />
                <h3 className="text-sm font-semibold text-arc-text">Creative Network Map</h3>
              </div>
              <div className="text-[11px] text-arc-faint">5 team - 2 candidates</div>
            </div>
            <div className="h-[440px] bg-grid-sm">
              <NetworkGraph onSelectCandidate={() => onNavigate('candidate')} />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Team gaps */}
            <div className="arc-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={13} className="text-arc-rose" />
                <h3 className="text-sm font-semibold text-arc-text">Team Gaps Identified</h3>
              </div>
              <div className="space-y-3">
                {gapCards.map(({ label, detail, color }) => (
                  <div key={label} className="rounded-xl p-3.5 border" style={{ borderColor: `${color}25`, background: `${color}06` }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                      <span className="text-xs font-semibold text-arc-text">{label}</span>
                    </div>
                    <p className="text-[11px] text-arc-faint leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Archetype balance */}
            <div className="arc-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={13} className="text-arc-faint" />
                <h3 className="text-sm font-semibold text-arc-text">Archetype Balance</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { archetype: 'Systems Thinker', current: 1, withCandidate: 2, color: '#3b82f6' },
                  { archetype: 'Visual Purist', current: 1, withCandidate: 1, color: '#10b981' },
                  { archetype: 'Researcher', current: 2, withCandidate: 2, color: '#06b6d4' },
                  { archetype: 'Narrative Craft', current: 1, withCandidate: 1, color: '#f59e0b' },
                ].map(({ archetype, current, withCandidate, color }) => (
                  <div key={archetype} className="arc-card p-3 text-center">
                    <div className="text-xs font-medium text-arc-text mb-2 leading-tight">{archetype}</div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg font-bold text-arc-faint">{current}</span>
                      <ChevronRight size={11} className="text-arc-faint" />
                      <span className="text-lg font-bold" style={{ color }}>{withCandidate}</span>
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
