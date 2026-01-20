import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Engineering from './pages/Engineering';
import Cloud from './pages/Cloud';
import AIAndData from './pages/AIAndData';
import Company from './pages/Company';
import ProductDetail from './pages/ProductDetail';
import ConsultExpert from './pages/ConsultExpert';
import './index.css';

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/company' && !location.pathname.startsWith('/product/') && location.pathname !== '/consult-expert';
  const showHeader = location.pathname !== '/consult-expert';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {showHeader && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/ai-and-data" element={<AIAndData />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/consult-expert" element={<ConsultExpert />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
      {/* Cookie Consent Banner - Global across all routes */}
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
