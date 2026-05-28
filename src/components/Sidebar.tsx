import { LayoutDashboard, Briefcase, Radio, Lightbulb, MessageSquare, Network, BarChart3, Settings, Zap, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'roles', label: 'Open Roles', icon: Briefcase },
  { id: 'signals', label: 'Talent Signals', icon: Radio },
  { id: 'insights', label: 'AI Insights', icon: Lightbulb },
  { id: 'interview', label: 'Interview Systems', icon: MessageSquare },
  { id: 'team', label: 'Team Mapping', icon: Network },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
];

export default function Sidebar({ activeScreen, onNavigate }: SidebarProps) {
  return (
    <aside className="w-[220px] min-w-[220px] h-screen sticky top-0 flex flex-col border-r border-arc-border bg-arc-surface">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-arc-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
            <Zap size={15} className="text-white" strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-arc-text uppercase">ARC</span>
            <div className="text-[10px] text-arc-faint tracking-widest uppercase">Intelligence</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`nav-item w-full text-left ${activeScreen === id ? 'active' : ''}`}
            >
              <Icon size={15} strokeWidth={1.8} />
              <span>{label}</span>
              {activeScreen === id && <ChevronRight size={12} className="ml-auto text-arc-blue opacity-60" />}
            </button>
          ))}
        </div>

        {/* Quick access */}
        <div className="mt-6 pt-4 border-t border-arc-border">
          <div className="metric-label mb-2 px-3">Recent Candidates</div>
          {['Maya Chen', 'Eli Torres', 'Priya Nair'].map((name, i) => (
            <button key={name} onClick={() => onNavigate('candidate')}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/[0.03] transition-colors group">
              <div className="w-6 h-6 rounded-full text-[10px] font-semibold flex items-center justify-center text-white"
                style={{ background: ['linear-gradient(135deg,#3b82f6,#06b6d4)', 'linear-gradient(135deg,#f59e0b,#f43f5e)', 'linear-gradient(135deg,#10b981,#3b82f6)'][i] }}>
                {name[0]}
              </div>
              <span className="text-xs text-arc-faint group-hover:text-arc-subtle transition-colors truncate">{name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-arc-border">
        <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-arc-blue to-arc-cyan flex items-center justify-center text-[11px] font-semibold text-white">JK</div>
          <div className="flex-1 min-w-0 text-left">
            <div className="text-xs font-medium text-arc-subtle truncate">Jordan Kim</div>
            <div className="text-[10px] text-arc-faint truncate">Head of Design Hiring</div>
          </div>
          <Settings size={13} className="text-arc-faint" />
        </button>
      </div>
    </aside>
  );
}
