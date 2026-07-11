import { useState, useEffect } from 'react';
import { ThemeContext, getTheme } from './lib/theme.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import HomePage from './pages/HomePage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import AdmissionsPage from './pages/AdmissionsPage.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    document.title =
      page === 'programs'
        ? 'Направления — МОДУС'
        : page === 'admissions'
          ? 'Приёмная кампания — МОДУС'
          : 'МОДУС — городской колледж современного профобразования';
  }, [page]);

  const theme = getTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <SiteHeader onNavigate={navigate} />
      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'programs' && <ProgramsPage onNavigate={navigate} />}
        {page === 'admissions' && <AdmissionsPage onNavigate={navigate} />}
      </main>
      <SiteFooter />
    </ThemeContext.Provider>
  );
}
