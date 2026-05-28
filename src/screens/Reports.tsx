import { BarChart3, Download, TrendingUp, Users, Clock, Star } from 'lucide-react';

const reportData = [
  { month: 'Sep', applied: 210, hired: 2, quality: 78 },
  { month: 'Oct', applied: 245, hired: 3, quality: 80 },
  { month: 'Nov', applied: 198, hired: 2, quality: 82 },
  { month: 'Dec', applied: 267, hired: 4, quality: 85 },
  { month: 'Jan', applied: 284, hired: 4, quality: 87 },
  { month: 'Feb', applied: 312, hired: 5, quality: 89 },
];

export default function Reports() {
  const maxApplied = Math.max(...reportData.map(d => d.applied));

  return (
    <div className="flex-1 min-h-screen bg-arc-bg overflow-y-auto">
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-arc-border bg-arc-bg/90 backdrop-blur-sm">
        <div>
          <h1 className="text-base font-semibold text-arc-text">Reports & Analytics</h1>
          <p className="text-xs text-arc-faint mt-0.5">Hiring intelligence summary - Q1 2028</p>
        </div>
        <button className="arc-btn-ghost text-xs flex items-center gap-1.5"><Download size={12} /> Export</button>
      </div>

      <div className="p-6 space-y-5">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Total Applicants', value: '1,516', trend: '+38%', icon: Users, color: '#3b82f6' },
            { label: 'Quality Hires', value: '20', trend: '+67%', icon: Star, color: '#10b981' },
            { label: 'Avg. Time to Hire', value: '18d', trend: '-12d', icon: Clock, color: '#f59e0b' },
            { label: 'Portfolio Avg. Score', value: '85.4', trend: '+7.2pts', icon: TrendingUp, color: '#06b6d4' },
          ].map(({ label, value, trend, icon: Icon, color }) => (
            <div key={label} className="arc-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <Icon size={13} style={{ color }} />
                <span className="metric-label">{label}</span>
              </div>
              <div className="text-2xl font-semibold text-arc-text mb-1">{value}</div>
              <div className="text-xs" style={{ color }}>{trend} vs last quarter</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="arc-card p-6">
          <div className="flex items-center gap-2 mb-5">
            <BarChart3 size={13} className="text-arc-faint" />
            <h3 className="text-sm font-semibold text-arc-text">Pipeline Volume & Quality Trend</h3>
          </div>
          <div className="flex items-end gap-3 h-40">
            {reportData.map(({ month, applied, quality }) => (
              <div key={month} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-sm" style={{
                  height: `${(applied / maxApplied) * 120}px`,
                  background: 'linear-gradient(to top, rgba(59,130,246,0.5), rgba(59,130,246,0.15))',
                }} />
                <div className="flex flex-col items-center">
                  <span className="text-[9px] text-arc-faint">{month}</span>
                  <span className="text-[8px] text-emerald-400">{quality}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-2 rounded-sm bg-arc-blue/50" />
              <span className="text-[10px] text-arc-faint">Applications</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-2 rounded-sm bg-emerald-500/50" />
              <span className="text-[10px] text-arc-faint">Quality Score</span>
            </div>
          </div>
        </div>

        {/* Breakdown table */}
        <div className="arc-card overflow-hidden">
          <div className="px-5 py-4 border-b border-arc-border">
            <h3 className="text-sm font-semibold text-arc-text">Monthly Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-arc-border">
                  {['Month', 'Applied', 'Screened', 'Portfolio', 'Interview', 'Hired', 'Quality'].map(h => (
                    <th key={h} className="px-5 py-3 text-left metric-label font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-arc-border">
                {reportData.map(({ month, applied, hired, quality }) => (
                  <tr key={month} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3 font-medium text-arc-text">{month} 2027</td>
                    <td className="px-5 py-3 text-arc-subtle">{applied}</td>
                    <td className="px-5 py-3 text-arc-subtle">{Math.round(applied * 0.5)}</td>
                    <td className="px-5 py-3 text-arc-subtle">{Math.round(applied * 0.24)}</td>
                    <td className="px-5 py-3 text-arc-subtle">{Math.round(applied * 0.11)}</td>
                    <td className="px-5 py-3 font-semibold text-emerald-400">{hired}</td>
                    <td className="px-5 py-3">
                      <span className="text-xs font-semibold" style={{ color: quality >= 85 ? '#10b981' : '#f59e0b' }}>{quality}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
