import { useState } from 'react';
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import CandidateProfile from './screens/CandidateProfile';
import PortfolioImmersion from './screens/PortfolioImmersion';
import InterviewGenerator from './screens/InterviewGenerator';
import TeamMap from './screens/TeamMap';
import TalentSignals from './screens/TalentSignals';
import Reports from './screens/Reports';
import Sidebar from './components/Sidebar';

type Screen =
  | 'landing'
  | 'dashboard'
  | 'candidate'
  | 'portfolio'
  | 'interview'
  | 'team'
  | 'signals'
  | 'insights'
  | 'roles'
  | 'reports'
  | 'settings';

function AppShell({ screen, setScreen }: { screen: Screen; setScreen: (s: Screen) => void }) {
  const sidebarActive = (() => {
    if (screen === 'candidate' || screen === 'portfolio') return 'dashboard';
    return screen;
  })();

  const handleSidebarNavigate = (id: string) => {
    setScreen(id as Screen);
  };

  const renderMain = () => {
    switch (screen) {
      case 'dashboard':
        return <Dashboard onNavigate={setScreen as (s: string) => void} />;
      case 'candidate':
        return (
          <CandidateProfile
            onBack={() => setScreen('dashboard')}
            onPortfolio={() => setScreen('portfolio')}
          />
        );
      case 'portfolio':
        return <PortfolioImmersion onBack={() => setScreen('candidate')} />;
      case 'interview':
        return <InterviewGenerator onNavigate={setScreen as (s: string) => void} />;
      case 'team':
        return <TeamMap onNavigate={setScreen as (s: string) => void} />;
      case 'signals':
        return <TalentSignals onNavigate={setScreen as (s: string) => void} />;
      case 'reports':
        return <Reports />;
      case 'insights':
        return (
          <div className="flex-1 flex items-center justify-center min-h-screen bg-arc-bg">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-arc-text mb-2">AI Insights</div>
              <p className="text-arc-faint text-sm">Navigate to Dashboard or Candidate Profiles to see intelligence.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard onNavigate={setScreen as (s: string) => void} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-arc-bg">
      <Sidebar activeScreen={sidebarActive} onNavigate={handleSidebarNavigate} />
      <main className="flex-1 min-w-0 page-enter" key={screen}>
        {renderMain()}
      </main>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');

  if (screen === 'landing') {
    return <Landing onEnter={() => setScreen('dashboard')} />;
  }

  return (
    <AppShell
      screen={screen}
      setScreen={setScreen}
    />
  );
}
