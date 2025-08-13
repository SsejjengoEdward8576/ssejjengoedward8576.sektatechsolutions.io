// router.js
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy‑load components
const Home = lazy(() => import('./components/Home'));
const ServicesProducts = lazy(() => import('./components/ServiceProduct'));
const OurWorks = lazy(() => import('./components/OurWorks'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Contacts = lazy(() => import('./components/Contacts'));
const RegistrationForm = lazy(() => import('./components/RegistrationForm'));
const SearchResults = lazy(() => import('./components/SearchResults'));
const NotFound = () => <div className="container mt-5">Page Not Found</div>;

// More realistic mock items
const items = [
  {
    id: 1,
    name: 'Responsive Web Design',
    description: 'Custom, mobile‑friendly websites using HTML, CSS, JavaScript, and React.',
    category: 'Service',
    price: 500
  },
  {
    id: 2,
    name: 'E‑Commerce Platform',
    description: 'Full‑stack online store with payment integration and inventory management.',
    category: 'Product',
    price: 1500
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description: 'Clean, modern personal portfolio built with React and Bootstrap.',
    category: 'Product',
    price: 300
  },
  {
    id: 4,
    name: 'SEO Optimization',
    description: 'Improve search rankings with tailored on‑page and off‑page SEO strategies.',
    category: 'Service',
    price: 250
  }
];

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-product" element={<ServicesProducts />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/search" element={<SearchResults items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
