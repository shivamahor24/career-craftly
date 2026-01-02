import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import EventsGallery from './pages/EventsGallery';
import Seminars from './pages/Seminars';

import LoadingScreen from './components/ui/LoadingScreen';
import FloatingContactButton from './components/ui/FloatingContactButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<EventsGallery />} />
            <Route path="/seminars" element={<Seminars />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingContactButton />
    </Router>
  );
}

export default App;
