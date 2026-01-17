import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Engineering from './pages/Engineering';
import Cloud from './pages/Cloud';
import AIAndData from './pages/AIAndData';
import Company from './pages/Company';
import ProductDetail from './pages/ProductDetail';
import './index.css';

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/company' && !location.pathname.startsWith('/product/');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
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
        </Routes>
      </main>
      {showFooter && <Footer />}
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
