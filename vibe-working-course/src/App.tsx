import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { KnowledgeSystemPage } from './pages/KnowledgeSystemPage';
import { MethodDetailPage } from './pages/MethodDetailPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PracticePage } from "./pages/PracticePage";
import { ResourcesPage } from './pages/ResourcesPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/knowledge-system" element={<KnowledgeSystemPage />} />
            <Route path="/knowledge-system/:id" element={<MethodDetailPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
