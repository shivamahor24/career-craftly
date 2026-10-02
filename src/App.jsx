import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EventsGallery from './pages/EventsGallery';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

import LoadingScreen from './components/ui/LoadingScreen';
import FloatingContactButton from './components/ui/FloatingContactButton';

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCaseStudiesPage = location.pathname.startsWith('/case-studies');
  const isProjectsPage = location.pathname.startsWith('/projects');
  const hasDedicatedLayout = isHomePage || isCaseStudiesPage || isProjectsPage;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F1222]">
      {!hasDedicatedLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsGallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hasDedicatedLayout && <Footer />}
      {!hasDedicatedLayout && <FloatingContactButton />}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('cc_loaded');
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('cc_loaded', 'true');
    setIsLoading(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <AppLayout />
    </Router>
  );
}

export default App;
