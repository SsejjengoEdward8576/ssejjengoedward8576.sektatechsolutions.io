// index.js
import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Global Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Lazy‑loaded pages for faster initial load
const Home = lazy(() => import('./components/Home'));
const ServicesProducts = lazy(() => import('./components/ServiceProduct'));
const OurWorks = lazy(() => import('./components/OurWorks'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Contacts = lazy(() => import('./components/Contacts'));
const RegistrationForm = lazy(() => import('./components/RegistrationForm'));
const NotFound = () => <div className="container mt-5">Page Not Found</div>;

const App = () => (
  <Router>
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-product" element={<ServicesProducts />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
