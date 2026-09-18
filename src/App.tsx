import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BibtexModal } from './components/BibtexModal';
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { BenchmarksPage } from './pages/BenchmarksPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { AboutPage } from './pages/AboutPage';
import { PeoplePage } from './pages/PeoplePage';
import { UpdatesPage } from './pages/UpdatesPage';
import { CollaboratePage } from './pages/CollaboratePage';
import { Publication } from './types';

export const App: React.FC = () => {
  // Support standard URL navigation and hash/pushState
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [citePublication, setCitePublication] = useState<Publication | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/research':
        return <ResearchPage onNavigate={navigate} />;
      case '/benchmarks':
        return <BenchmarksPage onCite={setCitePublication} />;
      case '/publications':
        return <PublicationsPage onCite={setCitePublication} />;
      case '/about':
        return <AboutPage />;
      case '/people':
        return <PeoplePage />;
      case '/updates':
        return <UpdatesPage />;
      case '/collaborate':
        return <CollaboratePage />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} onCite={setCitePublication} />;
    }
  };

  return (
    <>
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      {renderCurrentPage()}
      <Footer onNavigate={navigate} />

      {/* BibTeX Citation Modal */}
      <BibtexModal 
        publication={citePublication} 
        onClose={() => setCitePublication(null)} 
      />
    </>
  );
};
